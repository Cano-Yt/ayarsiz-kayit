const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["örnek"], /// diğer çalışma isimleri ("isim","ad" şeklinde çoğul olarak kullanabilirsiniz)
  permLevel: 0 /// komutu kimlerin kullanabileceği (
};

exports.help = {
  name: "örnek", /// komutun çalışacağı isim
  description: "Örnek açıklama.", /// açıklama
  usage: ".örnek <kullanım>" /// kullanım şekli
};
nızı sağlar.",
  usage: ".oylama <oylamaismi>"
};
