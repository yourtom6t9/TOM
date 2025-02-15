const { readdirSync, readFileSync, writeFileSync, existsSync } = require("fs-extra");
const path = require("path");
const exec = (cmd, options) => new Promise((resolve, reject) => {
	require("child_process").exec(cmd, options, (err, stdout) => {
		if (err) return reject(err);
		resolve(stdout);
	});
});
const { log, loading, getText, colors, removeHomeDir } = global.utils;
const { GoatBot } = global;
const { configCommands } = GoatBot;
const regExpCheckPackage = /require(\s+|)(\s+|)[`'"]([^`'"]+)[`'"](\s+|)/g;
const packageAlready = [];
const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
let count = 0;

module.exports = async function (api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, createLine) {
	// { CHECK ORIGIN CODE }
	const aliasesData = await globalData.get('setalias', 'data', []);
	if (aliasesData) {
		for (const data of aliasesData) {
			const { aliases, commandName } = data;
			for (const alias of aliases)
				if (GoatBot.aliases.has(alias))
					throw new Error(`Alias "${alias}" already exists in command "${commandName}"`);
				else
					GoatBot.aliases.set(alias, commandName);
		}
	}
	const folders = ["cmds", "events"];
	let text, setMap, typeEnvCommand;

	for (const folderModules of folders) {
		const makeColor = folderModules == "cmds" ? createLine("LOADING COMMANDS") : createLine("LOADING EVENTS");
		console.log(colors.hex("#f5ab00")(makeColor));

		text = folderModules == "cmds" ? "command" : "event command";
		typeEnvCommand = folderModules == "cmds" ? "envCommands" : "envEvents";
		setMap = folderModules == "cmds" ? "commands" : "eventCommands";

		const fullPathModules = path.normalize(process.cwd() + `/scripts/${folderModules}`);
		const Files = readdirSync(fullPathModules)
			.filter(file => file.endsWith(".js") && !file.endsWith("eg.js") &&
				(process.env.NODE_ENV == "development" ? true : !file.match(/(dev)\.js$/g)) &&
				!configCommands[folderModules == "cmds" ? "commandUnload" : "commandEventUnload"]?.includes(file));

		let commandLoadSuccess = 0;
		const commandError = [];

		for (const file of Files) {
			const pathCommand = path.normalize(fullPathModules + "/" + file);
			try {
				// CHECK PACKAGE
				const contentFile = readFileSync(pathCommand, "utf8");
				let allPackage = contentFile.match(regExpCheckPackage);
				if (allPackage) {
					allPackage = allPackage.map(p => p.match(/[`'"]([^`'"]+)[`'"]/)[1])
						.filter(p => !p.startsWith("./") && !p.startsWith("../"));
					for (let packageName of allPackage) {
						packageName = packageName.includes('/') ? packageName.split('/').slice(0, 2).join('/') : packageName.split('/')[0];
						if (!packageAlready.includes(packageName)) {
							packageAlready.push(packageName);
							if (!existsSync(`${process.cwd()}/node_modules/${packageName}`)) {
								const waiting = setInterval(() => {
									loading.info('PACKAGE', `${spinner[count % spinner.length]} Installing package ${packageName} for ${text} ${file}`);
									count++;
								}, 80);
								try {
									await exec(`npm install ${packageName} --${pathCommand.endsWith('.dev.js') ? 'no-save' : 'save'}`);
									clearInterval(waiting);
									process.stderr.write('\r\x1b[K');
									console.log(`${colors.green('✔')} Installed package ${packageName} successfully`);
								} catch (err) {
									clearInterval(waiting);
									process.stderr.write('\r\x1b[K');
									console.log(`${colors.red('✖')} Failed to install package ${packageName}`);
									throw new Error(`Can't install package ${packageName}`);
								}
							}
						}
					}
				}

				// LOAD COMMAND
				global.temp.contentScripts[folderModules][file] = contentFile;
				const command = require(pathCommand);
				command.location = pathCommand;
				const configCommand = command.config;
				const commandName = configCommand.name;
				if (!configCommand || !configCommand.category || !commandName || !command.onStart || typeof command.onStart !== "function")
					throw new Error(`Invalid command structure in ${file}`);

				if (GoatBot[setMap].has(commandName))
					throw new Error(`${text} "${commandName}" already exists with file "${removeHomeDir(GoatBot[setMap].get(commandName).location || "")}"`);

				const { onFirstChat, onChat, onLoad, onEvent, onAnyEvent } = command;
				if (onLoad) await onLoad({ api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData });

				if (onChat) GoatBot.onChat.push(commandName);
				if (onFirstChat) GoatBot.onFirstChat.push({ commandName, threadIDsChattedFirstTime: [] });
				if (onEvent) GoatBot.onEvent.push(commandName);
				if (onAnyEvent) GoatBot.onAnyEvent.push(commandName);

				GoatBot[setMap].set(commandName.toLowerCase(), command);
				commandLoadSuccess++;

			} catch (error) {
				commandError.push({ name: file, error });
			}
		}
		console.log("\r");
		if (commandError.length > 0) {
			log.err("LOAD ERROR", getText('loadScripts', 'loadScriptsError', colors.yellow(text)));
			for (const item of commandError)
				console.log(` ${colors.red('✖ ' + item.name)}: ${item.error.message}\n`, item.error);
		}
	}
};

// DISPLAY SCRIPT INFO
console.log(colors.hex("#f5ab00")("\n=========================================="));
console.log(colors.hex("#f5ab00")("  Script: GoatBot Command & Event Loader  "));
console.log(colors.hex("#f5ab00")(`  Developed by: MOHAMMAD RANA `));
console.log(colors.hex("#f5ab00")(`  Facebook: https://www.facebook.com/XAICO.RANA `));
console.log(colors.hex("#f5ab00")("==========================================\n"));
