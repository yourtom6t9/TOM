const fs = require("fs-extra");

module.exports = {
	config: {
		name: "loadconfig",
		aliases: ["loadcf"],
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Load lại config của bot",
			en: "Reload config of bot"
		},
		category: "owner",
		guide: "{pn}"
	},

	langs: {
		vi: {
			success: "Config đã được load lại thành công"
		},
		en: {
			success: "📍 𝘊𝘰𝘯𝘧𝘪𝘨 𝘏𝘢𝘴 𝘉𝘦𝘦𝘯 𝘙𝘦𝘭𝘰𝘢𝘥𝘦𝘥 𝘚𝘶𝘤𝘤𝘦𝘴𝘧𝘶𝘭𝘭𝘺 ✅"
		}
	},

	onStart: async function ({ message, getLang }) {
		global.GoatBot.config = fs.readJsonSync(global.client.dirConfig);
		global.GoatBot.configCommands = fs.readJsonSync(global.client.dirConfigCommands);
		message.reply(getLang("success"));
	}
};
