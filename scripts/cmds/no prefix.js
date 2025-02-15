const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "noprefix",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "good night":
          message.reply({
            body: " আ፝֟፝֟মা፝֟፝֟র প্রে፝֟፝֟ম না፝֟፝֟ই কপা፝֟፝֟লে 🤦‍♂️\nক፝֟፝֟থা হ፝֟፝֟বে সকা፝֟፝֟লে 🙋\n\nলু፝֟፝֟ঙ্গি ক፝֟፝֟রো টাই፝֟፝֟ট🙅‍♂️\nসবা፝֟፝֟ইরে፝֟፝֟ জা፝֟፝֟না፝֟፝֟ই গুড፝֟፝֟ নাই፝֟፝֟ট 🫣",
            attachment: fs.createReadStream("scripts/cmds/RANA/goodnight.gif"),
          });
          await api.setMessageReaction("🫣", event.messageID, event.threadID, api);
        break;
case "good morning":
          message.reply({
            body: "⋆⃝⋆⃝⭕বউ নাই কপালে 🥺 ⋆⃝⋆⃝⭕\n ⋆⃝⋆⃝⭕উঠে পড়েছি সকালে 🤭 ⋆⃝⋆⃝⭕\n\n____🫣 𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠  🫣____\n⋆⃝⋆⃝⭕__🐸🐸__ ⋆⃝⋆⃝⭕",
            attachment: fs.createReadStream("scripts/cmds/RANA/goodmorning.gif"),
          });
          await api.setMessageReaction("🥱", event.messageID, event.threadID, api);
   case "welcome":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n    Welcome! Enjoy Your Stay! 🌸",
            attachment: fs.createReadStream("scripts/cmds/RANA/welcome.gif"),
          });
          await api.setMessageReaction("🌸", event.messageID, event.threadID, api);
case "prefix":
          message.reply({
            body: "‎‎╭──◆𝙱𝙾𝚃 - 𝙿𝚁𝙴𝙵𝙸𝚇◆───╮\𝚗├➤𝙼𝚢 𝙿𝚛𝚎𝚏𝚒𝚡 𝙸𝚜 :  » / «\n‎├➤𝙾𝚠𝚗𝚎𝚛 : 𝙼𝚘𝚑𝚊𝚖𝚖𝚊𝚍 𝚁𝙰𝙽𝙰\n‎├➤𝙸𝙱 : m.me/XAICO.RANA\n‎╰───────────────⭓",
            attachment: fs.createReadStream("scripts/cmds/RANA/garou.gif"),
          });
          await api.setMessageReaction("🪐", event.messageID, event.threadID, api);
  case "owner":
message.reply({
body: "‎╭──✦ 𝗔𝗗𝗠𝗜𝗡  𝗜𝗡𝗙𝗢 ✦──╮\n├‣𝙽𝙰𝙼𝙴     : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰\n├‣𝙵𝙱 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰\n├‣𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 : 𝙸𝚂𝙻𝙰𝙼\n├‣𝙰𝙳𝙳𝚁𝙴𝚂𝚂  : 𝙿𝙾𝙽𝙲𝙷𝙰𝙶𝙰𝚁𝙷\n├‣𝙶𝙴𝙽𝙳𝙴𝚁   : 𝙼𝙰𝙻𝚎\n├‣𝙰𝙶𝙴      : 𝟷𝟾+\n├‣𝚁𝙴𝙻𝙰𝚃𝙸𝙾𝙽 : 𝚂𝙸𝙽𝙶𝙻𝙴\n├‣𝚆𝙾𝚁𝙺     : 𝚂𝚃𝚄𝙳𝙴𝙽𝚃\n├‣𝙼𝙰𝙸𝚕 : rsrana609@gmail.com\n├‣𝚆𝙿: 01988686406\n├‣𝚃𝙴𝙻𝙸𝙶𝚁𝙰𝙼 : t.me/KING_RANA_404\n├‣𝙵𝙱 : https://facebook.com/XAICO.RANA\n╰────────────────♡彡",
            attachment: fs.createReadStream("scripts/cmds/noprefix/goodnight.gif"),
          });
          await api.setMessageReaction("😘", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};

