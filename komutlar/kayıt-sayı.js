const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
let erkek; {if(!db.get(`kayıt-erkek_${member.id}`)){erkek="0"}else{erkek=}}
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-sayı","k-say"], 
  permLevel: 0
};

exports.help = {
  name: "kayıtsayı",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
