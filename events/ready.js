
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`);
  console.log(`• ALTYAPI Başlatılıyor...`);
  console.log(`• Komutlar Başarıyla Yüklendi!`);
  console.log(`• Discorda Başarıyla Bağlandı!`);
  client.user.setStatus("online"); /// ("") kısmı (online - dnd - idle) gibi değiştirilebilir.
  client.user.setActivity("✮ Delinquents Register", { type: "WATCHING" }); //// type kısmı (WATCHING , PLAYING , LISTENING) gibi değiştirilebilir.
  console.log(`• Oynuyor Başarıyla Ayarlandı!`);
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`);
};
