module.exports = {
	config: {
		name: "unsend",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Gỡ tin nhắn của bot",
			en: "Unsend bot's message"
		},
		category: "box chat",
		guide: {
			vi: "reply tin nhắn muốn gỡ của bot và gọi lệnh {pn}",
			en: "reply the message you want to unsend and call the command {pn}"
		}
	},

	langs: {
		vi: {
			syntaxError: "Vui lòng reply tin nhắn muốn gỡ của bot"
		},
		en: {
			syntaxError: "𝘗𝘭𝘦𝘢𝘴𝘴𝘦 𝘙𝘦𝘱𝘭𝘺 𝘛𝘩𝘦 𝘔𝘢𝘴𝘴𝘢𝘨𝘦 𝘠𝘰𝘶 𝘞𝘢𝘯𝘵 𝘛𝘰 𝘜𝘯𝘴𝘦𝘯𝘥 "
		}
	},

	onStart: async function ({ message, event, api, getLang }) {
		if (!event.messageReply || event.messageReply.senderID != api.getCurrentUserID())
			return message.reply(getLang("syntaxError"));
		message.unsend(event.messageReply.messageID);
	}
};
