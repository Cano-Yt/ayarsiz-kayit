const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`);
  console.log(`• BIGGZ ALTYAPI Başlatılıyor...`);
  console.log(`• Komutlar Başarıyla Yüklendi!`);
  console.log(`• Discorda Başarıyla Bağlandı!`);
  client.user.setStatus("online"); /// ("") kısmı (online - dnd - idle) gibi değiştirilebilir.
  client.user.setActivity("OYNUYOR KISMI", { type: "WATCHING" }); //// type kısmı (WATCHING , PLAYING , LISTENING) gibi değiştirilebilir.
  console.log(`• Oynuyor Başarıyla Ayarlandı!`);
  console.log(
    `• ` +
      client.channels.size +
      ` Kanala, ` +
      client.guilds.size +
      ` Sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` Kullanıcıya Hizmet Veriliyor!`
  );
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`);
};
