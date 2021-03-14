const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(message.guild.name)
.setDescription(`
<a:galp:818857966157168682> Toplam üye: **${message.guild.members.cache.size}**
<a:kz:818847044692213760> Toplam kadın: **${message.guild.roles.cache.get(ayarlar.kız).members.size}**
<a:erkek:818847080461893673> Toplam erkek: **${message.guild.roles.cache.get(ayarlar.erkek).members.size}**
<a:galp3:819172396836716554> Toplam kanal: **${message.guild.channels.cache.size}**
<a:oks:818847447132536842> Toplam bot: **${message.guild.members.cache.filter(member => member.user.bot).size}**`)
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
