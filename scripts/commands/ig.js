/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ღ••\n–❥••••প্রতিটি༎༎মানুষই༎༎হাসতে༎༎চায়༎༅༎কান্না༎༅༎ছাড়া 🤸‍♂️\n– ❥••••কিন্তু༎༎রংধনু༎༎কি༎༎দেখা༎༎যায়༎༅༎বৃষ্টি༎༅༎”ছাড়া!!🖤🌻\n۵",
             "-!\n__︵༊-“দিন༎༅শেষে༎༅হাসি༎༅মুখে༎༅এটাই༎༅বলি༎࿐\n༊-“আমাকে༎༅ভালো༎༅রাখার༎༅জন্য༎༅আমি༎༅নিজেই༎༅যথেষ্ট༎࿐\n-!",
             "- ︵ 𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙞𝙣 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚- “, \n ভালো কিছু পেতে হলে তোমাকে ‘𝙨𝙖𝙘𝙧𝙞𝙛𝙞𝙘𝙚’ করতেই হবে ;-^\n আল্লাহ যা করেন ভালোর জন্যই করেন𝐈𝐬 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐦𝐨𝐭𝐢𝐯𝐚𝐭𝐢𝐨𝐧 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐠𝐢𝐯𝐞 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟🌸\n\n- 🥀",
             "- প্রি্ঁয়্ঁ᭄\n━━━━✿তুঁমি্ঁ᭄ আ্ঁমা্ঁর্✿᭄ কো্ঁনো্ঁ ✿᭄আ্ঁবে্গঁ᭄ নঁও✿᭄যা্᭄\n কিঁছুক্ষণ্✿᭄ প্ঁরে্ঁই্✿᭄ কে্ঁটে্ ᭄ যাঁবে্✿᭄তুঁ\nমিঁ✿᭄ আ্ঁমা্ঁর্✿᭄ সে্ঁই✿᭄ সঁপ্ন্✿᭄ নঁও᭄যাঁ\n✿᭄ ঘু্ঁম᭄ ভাঁঙার্✿᭄ সা্ঁথে্᭄ সা্ঁথে্✿᭄ হা্ঁরি্ঁয়ে্✿᭄ যা্ঁবে্᭄তুৃ্ঁ\nমি✿᭄ আ্ঁমাঁর্✿᭄ সে্ঁই✿᭄ মা্ঁয়া্✿᭄যা্ঁ᭄মৃঁ\nত্যুর্✿᭄ আ্ঁগ✿᭄প্ঁর্যন্ত✿᭄ থে্ঁকেঁ᭄যা্ঁবে্ঁ✿᭄",
             "┏━━━━︵প্রিয়\n°ভালোবাসার মানুষটা যদি বিশ্বস্ত হয়\n  °তাহলে দূর থেকেও ভালোবাসা যায় ⊱ ",
             "_”Dear প্রিয়–“” “”— -তুমি কার আকাশে উড়ো\n “”দোয়া করি ঐ “আকাশে” “”ঠাডা পইরা মরো””",
             "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰",
             "•হ্যাঁলোঁ গাঁইঁসঁ\n যাঁকেঁ দেঁখিঁ তাঁকেঁইঁ ভাঁলোঁ লাঁগেঁ\n মঁনেঁ হঁয়ঁ আঁমাঁরঁ বিঁয়েঁরঁ বঁয়ঁসঁ\n হঁয়েঁ গেঁছেঁ",
             " ︵\n༊_ গুরুত্ব দাও তাঁকে, যে তোমার মন খারাপের সময়ে পাশে থাকে-!!",
             "︵❝།།” হাজারো কষ্ট লুকানোর মাঝে°︵❝།། একটি মিথ্যে হাসি দিয়ে আমরা আনন্দ পাই༅༎࿐",
             "•-:পৃথিবীতে সব থেকে প্রতারনা\n মূলক কথা হলো\n-: আমি তোমাকে ভালোবাসি_-:",
             "︵\nভিন্ন༅༎গল্প⋆⃝𝄞♡\n𝄞⋆⃝আর༅༎প্রতিটা ༅༎গল্পের⋆⃝𝄞♡শেষ ༅༎\n কথা ༅༎ ভালো ༅༎ থেকো⋆⃝𝄞\n┏╮/╱╰••••••••",
             " ༊═❥নিজের༊᭄কষ্ট  ༊᭄গুলোকে᭄\n༊═❥উপভোগ  ༊᭄করার༊᭄সবচেয়ে_// ༆༊═❥সহজ༊᭄উপায়༊᭄হলো༊᭄ চুপ  ༊᭄থাকা//",
             "_༊༎ຶ\n❥༊❝প্রিয় শুধু একবার আমার প্রেমে…!!\n༊_হাবুডুবু খাও  ❥༊❝_ডুবিয়ে মারার দ্বায়িত্ব আমার••||",
             "_︵❝།།❥┈•༏༏༏❝যে-তোমার জন্য তৈরি হয়েছে~\n༊❝দিন শেষে সে তোমার কাছে আসবেই༆᭄\n❝শুধু-ধৈর্যের প্রয়োজন…..!!",
             "_ ༒ღ࿐!!প্রিয়!!༒ღ࿐\n༒ღ࿐!!-তোমাকে!চাইবো!তো!\n শুধু!আল্লাহর কাছে-!!༒ღ࿐\n༒ღ࿐- পেলেও! চাইবো!\n না!পেলেও!চাইবো-!!༒ღ࿐  "
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/6i0TxSX.mp4",
  "https://i.imgur.com/pXDmK05.mp4",
"https://i.postimg.cc/Y0wvTzr6/images-29.jpg",
"https://i.postimg.cc/1Rpnw2BJ/images-28.jpg",
"https://i.postimg.cc/mgrPxDs5/images-27.jpg",
"https://i.postimg.cc/yxXDK3xw/images-26.jpg",
"https://i.postimg.cc/kXqVcsh9/muslim-boy-having-worship-praying-fasting-eid-islamic-culture-mosque-73899-1334.webp",
"https://i.postimg.cc/hGzhj5h8/muslims-reading-from-quran-53876-20958.webp",
"https://i.postimg.cc/x1Fc92jT/blue-mosque-istanbul-1157-8841.webp",
"https://i.postimg.cc/j5y56nHL/muhammad-ali-pasha-cairo-219717-5352.webp",
"https://i.postimg.cc/dVWyHfhr/images-1-21.jpg",
"https://i.postimg.cc/q7MGgn3X/images-1-22.jpg",
"https://i.postimg.cc/sX5CXtSh/images-1-16.jpg",
"https://i.postimg.cc/66Rp2Pwz/images-1-17.jpg",
"https://i.postimg.cc/Qtzh9pY2/images-1-18.jpg",
"https://i.postimg.cc/MGrhdz0R/images-1-19.jpg",
"https://i.postimg.cc/LsMSj9Ts/images-1-20.jpg",
"https://i.postimg.cc/KzNXyttX/images-1-13.jpg",


  
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
