const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(message.guild.name)
.setDescription(`
Toplam üye: **${message.guild.members.cache.filter(m => !m.user.bot).size}**
Toplam kadın: **${message.guild.roles.cache.get(ayarlar.kız).members.size}**
Toplam erkek: **${message.guild.roles.cache.get(ayarlar.erkek).members.size}**
Toplam kanal: **${message.guild.channels.cache.size}**
Toplam bot: **${message.guild.members.cache.filter(member => member.user.bot).size}**`)
message.channel.send(embed)
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
