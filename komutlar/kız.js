const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
let member = message.mentions.members.first()
  message.channel.send("örnek komut");
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["örnek", "örnek2", "örnek3"], 
  permLevel: 0
};

exports.help = {
  name: "örnek",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
