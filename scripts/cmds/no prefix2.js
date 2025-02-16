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
            body: "-〲হুম আমার বস রানা ও তেমাকে ভালোবাসে 🥰🥱",
          });
          await api.setMessageReaction("😘", event.messageID, event.threadID, api);
        break;
case "miss you":
          message.reply({
            body: "G⃠আমি তোমাকে রাইতে মিস করি 🥹🤖👅",
            
          });
          await api.setMessageReaction("🥱", event.messageID, event.threadID, api);
   case "😘":
          message.reply({
            body: "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
            
          });
          await api.setMessageReaction("😾", event.messageID, event.threadID, api);
case "👍":
          message.reply({
            body: "‎‎ সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
            
          });
          await api.setMessageReaction("👊", event.messageID, event.threadID, api);
          case "hi":
          message.reply({
            body: "‎‎__〲Assala-Mualaikum-🥀🖤 ",
            
          });
          await api.setMessageReaction("💐", event.messageID, event.threadID, api);
          case "mc":
          message.reply({
            body: "‎‎ SAME TO YOU 😾",
            
          });
          case "chup":
          message.reply({
            body: "‎‎ তুই চুপ তোর ১৪ গুষ্টি চুপ 😼",
            
          });
          case "kire":
          message.reply({
            body: "‎‎ সরি বস মাফ করে দেন আর এমন ভুল হবে না 🥺🙏",
            
          });
          case "afro":
          message.reply({
            body: "‎‎ খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রানা এর বউ এর নাম..!⛏️😾",
            
          });
          case "kiss me":
          message.reply({
            body: "‎‎  তুমি পঁচা তোমাকে কিস দিবো না 🤭",
            
          });
          case "hmm":
          message.reply({
            body: "‎‎ সব কিছুর জবাব দেওয়া যায়😊 ,কিন্তু হুম এর জবাব কিভাবে দিবো 😅💔",
            
          });
          await api.setMessageReaction("🤣", event.messageID, event.threadID, api);
          case "morning":
          message.reply({
            body: "‎‎ GOOD MORNING দাত ব্রাশ করে খেয়ে নেও 😚",
            
          });
          await api.setMessageReaction("💐", event.messageID, event.threadID, api);
          case "bal":
          message.reply({
            body: "‎‎তোমার বাল উঠে নাই নাকি তোমার?? 🤖😾 ",
            
          });
          await api.setMessageReaction("😆", event.messageID, event.threadID, api);
          case "ceo":
          message.reply({
            body: "‎‎𝗢𝘄𝗻𝗲𝗿 : ☞𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗻𝗮 🖤❤️‍🩹☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝗧𝗼𝗺.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/XAICO.RANA\nতার সাতে যোগা যোগ করবেন WhatsApp :- +8801988686406",
            
          });
          await api.setMessageReaction("😘", event.messageID, event.threadID, api);
          case "tor boss ke":
          message.reply({
            body: "‎‎ 𝗠𝘆 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗻𝗮 ❤️/n হাই আমি মেছেন্জার ROBOT  আামার বস 𝗥𝗔𝗡𝗔 আমাকে আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য/n আমি চাই আপনারা সব সময় হাসি খুশি থাকেন",
            
          });
          await api.setMessageReaction("💐", event.messageID, event.threadID, api);
  case "admin":
message.reply({
body: "‎╭──✦ 𝗔𝗗𝗠𝗜𝗡  𝗜𝗡𝗙𝗢 ✦──╮\n├‣𝙽𝙰𝙼𝙴     : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰\n├‣𝙵𝙱 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰\n├‣𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 : 𝙸𝚂𝙻𝙰𝙼\n├‣𝙰𝙳𝙳𝚁𝙴𝚂𝚂  : 𝙿𝙾𝙽𝙲𝙷𝙰𝙶𝙰𝚁𝙷\n├‣𝙶𝙴𝙽𝙳𝙴𝚁   : 𝙼𝙰𝙻𝚎\n├‣𝙰𝙶𝙴      : 𝟷𝟾+\n├‣𝚁𝙴𝙻𝙰𝚃𝙸𝙾𝙽 : 𝚂𝙸𝙽𝙶𝙻𝙴\n├‣𝚆𝙾𝚁𝙺     : 𝚂𝚃𝚄𝙳𝙴𝙽𝚃\n├‣𝙼𝙰𝙸𝚕 : rsrana609@gmail.com\n├‣𝚆𝙿: 01988686406\n├‣𝚃𝙶 : t.me/KING_RANA_404\n├‣𝙵𝙱 : https://facebook.com/XAICO.RANA\n╰────────────────♡彡",
       
          });
          await api.setMessageReaction("😘", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};
 
 
