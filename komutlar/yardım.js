const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(message.guild.name)
.setDescription(`
Kayıt sistemi
\`${prefix}erkek\` \`${prefix}kadın\` \`${prefix}kayıt-sayı\`

Normal komutlar
\`${prefix}say\` \`${prefix}erkek-say\` \`${prefix}kadın-say\` 
`)
message.channel.send(embed)
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
