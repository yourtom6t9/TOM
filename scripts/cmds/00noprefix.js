const fs = require('fs');

module.exports = {
  config: {
    name: "noprefix2",
    version: "1.0",
    author: "RANA",//Dont Change My Credit 
    countDown: 5,
    role: 0,
    shortDescription: "no prefix2",
    longDescription: "no prefix2",
    category: "no prefix2",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "i love you":
          message.reply({
            body: "হুম আমার বস রানা ও তেমাকে ভালোবাসে 🥰🥱",
          });
          await api.setMessageReaction("🫣", event.messageID, event.threadID, api);
        break;
case "miss you":
          message.reply({
            body: "আমি তোমাকে রাইতে মিস করি 🥹🤖👅",
            
          });
          await api.setMessageReaction("🥱", event.messageID, event.threadID, api);
   case "well":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n    Welcome! Enjoy Your Stay! 🌸",
            
          });
          await api.setMessageReaction("🌸", event.messageID, event.threadID, api);
case "hus":
          message.reply({
            body: "‎‎╭──◆𝙱𝙾𝚃 - 𝙿𝚁𝙴𝙵𝙸𝚇◆───╮\𝚗├➤𝙼𝚢 𝙿𝚛𝚎𝚏𝚒𝚡 𝙸𝚜 :  » / «\n‎├➤𝙾𝚠𝚗𝚎𝚛 : 𝙼𝚘𝚑𝚊𝚖𝚖𝚊𝚍 𝚁𝙰𝙽𝙰\n‎├➤𝙸𝙱 : m.me/XAICO.RANA\n‎╰───────────────⭓",
            
          });
          await api.setMessageReaction("🪐", event.messageID, event.threadID, api);
  case "admin":
message.reply({
body: "‎╭──✦ 𝗔𝗗𝗠𝗜𝗡  𝗜𝗡𝗙𝗢 ✦──╮\n├‣𝙽𝙰𝙼𝙴     : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰\n├‣𝙵𝙱 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰\n├‣𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 : 𝙸𝚂𝙻𝙰𝙼\n├‣𝙰𝙳𝙳𝚁𝙴𝚂𝚂  : 𝙿𝙾𝙽𝙲𝙷𝙰𝙶𝙰𝚁𝙷\n├‣𝙶𝙴𝙽𝙳𝙴𝚁   : 𝙼𝙰𝙻𝚎\n├‣𝙰𝙶𝙴      : 𝟷𝟾+\n├‣𝚁𝙴𝙻𝙰𝚃𝙸𝙾𝙽 : 𝚂𝙸𝙽𝙶𝙻𝙴\n├‣𝚆𝙾𝚁𝙺     : 𝚂𝚃𝚄𝙳𝙴𝙽𝚃\n├‣𝙼𝙰𝙸𝚕 : rsrana609@gmail.com\n├‣𝚆𝙿: 01988686406\n├‣𝚃𝙴𝙻𝙸𝙶𝚁𝙰𝙼 : t.me/KING_RANA_404\n├‣𝙵𝙱 : https://facebook.com/XAICO.RANA\n╰────────────────♡彡",
       
          });
          await api.setMessageReaction("😘", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};

