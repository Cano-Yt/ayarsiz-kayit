const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  /// komut kodları başı
  message.channel.send("örnek komut");
}; /// komut kodları sonu

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["örnek", "örnek2", "örnek3"], /// diğer çalışma isimleri
  /// ("isim","isim1" şeklinde çoğul olarak kullanabilirsiniz)
  permLevel: 0 /// komutu kimlerin kullanabileceği
  /// (main dosyasının en altında belirli rakamlar ve rakamların karşısında yetkileri bulunur, kendiniz de ayarlayabilirsiniz.)
  /// (0 herkes, 2 ban yetkisi olanlar, 3 yönetici yetkisi olanlar, 4 bot sahibi içindir)
};

exports.help = {
  name: "örnek", /// komutun çalışacağı isim
  description: "Örnek açıklama.", /// açıklama
  usage: ".örnek <kullanım>" /// kullanım şekli
};
