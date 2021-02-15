const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`BIGGZ Altyapı Başlatılıyor...`);
  console.log(
    `[${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}] Bot Aktif, Komutlar Başarıyla Yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${
      client.user.username
    } Ismi Ile Şuanda Giriş Yapıldı!`
  );
  client.user.setStatus("online"); /// ("") kısmı (online - dnd - idle) gibi değiştirilebilir.
  client.user.setActivity("OYNUYOR KISMI", { type: "WATCHING" }); //// type kısmı (WATCHING , PLAYING , LISTENING) gibi değiştirilebilir.
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Oyun Ismi Ayarlandı!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Şu An ` +
      client.channels.size +
      ` Adet Kanala, ` +
      client.guilds.size +
      ` Adet Sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` Kullanıcıya Hizmet Veriliyor!`
  );
};
