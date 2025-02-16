const axios = require("axios");
const cheerio = require("cheerio");
const Canvas = require("canvas");
const fs = require("fs-extra");
const langsSupported = [
	'sq', 'ar', 'az', 'bn', 'bs', 'bg', 'my', 'zh-hans',
	'zh-hant', 'hr', 'cs', 'da', 'nl', 'en', 'et', 'fil',
	'fi', 'fr', 'ka', 'de', 'el', 'he', 'hi', 'hu', 'id',
	'it', 'ja', 'kk', 'ko', 'lv', 'lt', 'ms', 'nb', 'fa',
	'pl', 'pt', 'ro', 'ru', 'sr', 'sk', 'sl', 'es', 'sv',
	'th', 'tr', 'uk', 'vi'
];

module.exports = {
	config: {
		name: "emojimean",
		alias: ["em", "emojimeaning", "emojimean"],
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Tìm nghĩa của emoji",
			en: "Find the meaning of emoji"
		},
		category: "wiki",
		guide: {
			vi: "   {pn} <emoji>: Tìm nghĩa của emoji",
			en: "   {pn} <emoji>: Find the meaning of emoji"
		}
	},

	langs: {
		vi: {
			missingEmoji: "⚠ Bạn chưa nhập emoji",
			meaningOfEmoji: "📌 Ý nghĩa của emoji %1:\n\n📄 Nghĩa đầu tiên: %2\n\n📑 Nghĩa khác: %3%4\n\n📄 Shortcode: %5\n\n© Nguồn: %6\n\n📺 Dưới đây là hình ảnh hiện thị của emoji trên một số nền tảng:",
			meaningOfWikipedia: "\n\n📝 Reaction tin nhắn này để xem nghĩa \"%1\" từ Wikipedia",
			meanOfWikipedia: "📑 Nghĩa của \"%1\" trên Wikipedia:\n%2",
			manyRequest: "⚠ Hiện tại bot đã gửi quá nhiều yêu cầu, vui lòng thử lại sau",
			notHave: "Không có"
		},
		en: {
			missingEmoji: "⚠ You have not entered an emoji",
			meaningOfEmoji: "📌 Meaning of emoji %1:\n\n📄 First meaning: %2\n\n📑 More meaning: %3%4\n\n📄 Shortcode: %5\n\n© Source: %6\n\n📺 Below are images of the emoji displayed on some platforms:",
			meaningOfWikipedia: "\n\n📝 React to this message to see the meaning \"%1\" from Wikipedia",
			meanOfWikipedia: "📑 Meaning of \"%1\" on Wikipedia:\n%2",
			manyRequest: "⚠ The bot has sent too many requests, please try again later",
			notHave: "Not have"
		}
	},

	onStart: async function ({ args, message, event, threadsData, getLang, commandName }) {
		const emoji = args[0];
		if (!emoji)
			return message.reply(getLang("missingEmoji"));
		const threadData = await threadsData.get(event.threadID);
		let myLang = threadData.data.lang ? threadData.data.lang : global.GoatBot.config.language;
		myLang = langsSupported.includes(myLang) ? myLang : "en";

		let getMeaning;
		try {
			getMeaning = await getEmojiMeaning(emoji, myLang);
		}
		catch (e) {
			if (e.response && e.response.status == 429) {
				let tryNumber = 0;
				while (tryNumber < 3) {
					try {
						getMeaning = await getEmojiMeaning(emoji, myLang);
						break;
					}
					catch (e) {
						tryNumber++;
					}
				}
				if (tryNumber == 3)
					return message.reply(getLang("manyRequest"));
			}
		}

		const {
			meaning,
			moreMeaning,
			wikiText,
			meaningOfWikipedia,
			shortcode,
			source
		} = getMeaning;
		let images = getMeaning.images;

		const sizeImage = 190;
		const imageInRow = 5;
		const paddingOfTable = 20;
		const marginImageAndText = 10;
		const marginImage = 20;
		const marginText = 2;
		const fontSize = 30;
		const addWidthImage = 150;

		const font = `${fontSize}px Arial`;
		const _canvas = Canvas.createCanvas(0, 0);
		const _ctx = _canvas.getContext("2d");

		const widthOfOneImage = sizeImage + marginImage * 2 + addWidthImage;
		for (const item of images) {
			const text = wrapped(item.platform, widthOfOneImage, font, _ctx);
			item.text = text;
		}

		const maxRowText = Math.max(...images.map(item => item.text.length));
		const heightForText = maxRowText * fontSize + marginText * 2 + fontSize;

		const heightOfOneImage = sizeImage + marginImageAndText + heightForText + marginImage + marginText;

		const witdhTable = paddingOfTable + imageInRow * widthOfOneImage + paddingOfTable;
		const heightTable = paddingOfTable + Math.ceil(images.length / imageInRow) * heightOfOneImage + paddingOfTable;

		const canvas = Canvas.createCanvas(witdhTable, heightTable);
		const ctx = canvas.getContext("2d");
		ctx.font = font;
		ctx.fillStyle = "#303342";
		ctx.fillRect(0, 0, witdhTable, heightTable);

		images = await Promise.all(images.map(async (el) => {
			let imageLoaded;
			const url = `https://www.emojiall.com/${el.url}`;
			try {
				imageLoaded = await Canvas.loadImage(url);
				// https://www.emojiall.com/en/svg-to-png/openmoji-black/640/1F97A.png
				// https://www.emojiall.com/images/svg/openmoji-black/1F97A.svg
			}
			catch (e) {
				try {
					const splitUrl = url.split("/");
					imageLoaded = await Canvas.loadImage(`https://www.emojiall.com/images/svg/${splitUrl[splitUrl.length - 2]}/${splitUrl[splitUrl.length - 1].replace(".png", ".svg")}`);
				}
				catch (e) {
					imageLoaded = null;
				}
			}
			return {
				...el,
				imageLoaded
			};
		}));
		images = images.filter(item => item.imageLoaded);

		let xStart = paddingOfTable + marginImage;
		let yStart = paddingOfTable + marginImage;

		ctx.fillStyle = "white";
		ctx.textAlign = "center";

		images.forEach(async (el) => {
			const image = el.imageLoaded;
			ctx.fillSty
