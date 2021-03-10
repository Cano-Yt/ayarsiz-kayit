const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
let member = message.mentions.members.first() ||message.guild.members.cache.get(args[0])
let isim = args[1]
let yaş = args[2]
if(!member) return message.channel.send(`<a:x_:818861889400209419> Bir kullanıcı etiketle veya idsini gir`)
if(!isim) return message.channel.send(`<a:x_:818861889400209419> isim girmelisin`)
if(!yaş) return message.channel.send(`<a:x_:818861889400209419> yaş girmelisin`)
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
