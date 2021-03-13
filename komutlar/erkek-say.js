const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(message.guild.name)
.setDescription(`
Aşşağıda erkek üyeler verilmiştir [${message.guild.roles.cache.get('816210419638468618').members.size}]
${message.guild.roles.cache.get('816210419638468618').members.map(m => m).join(", ")}`)
message.channel.send(embed)
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "erkek-say",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
