const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(message.guild.name)
.setDescription(`
<a:star_red:818810167490510900> Kayıt sistemi <a:star_red:818810167490510900>
\`${prefix}erkek\` \`${prefix}kadın\` \`${prefix}kayıt-sayı\`

<a:star_red:818810167490510900> Normal komutlar <a:star_red:818810167490510900>
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
