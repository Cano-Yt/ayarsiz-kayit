const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(message.guild.name)
.setDescription(`
<a:galp:818857966157168682> Toplam üye: **${message.guild.members.size}
<a:galp3:819172396836716554> `)
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
