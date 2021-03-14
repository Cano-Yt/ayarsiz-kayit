const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;
const moment = require("moment")
moment.locale("tr")
exports.run = async(client, message, args) => {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let isim = args[1]
let yaş = args[2]
if(!message.member.roles.cache.has(ayarlar.kayıtyetkili)) return message.channel.send(`Bu komutu kullanabilmek için \`${message.guild.roles.cache.get(ayarlar.kayıtyetkili).name}\` Rolüne sahip olmalısın`)
if(!member) return message.channel.send(`Bir kullanıcı etiketle veya idsini gir`)
if(!member.roles.cache.has(ayarlar.kayıtsız)) return message.channel.send(`Kullanıcıda \`${message.guild.roles.cache.get(ayarlar.kayıtsız).name}\` Rolü olması lazım`)
if(!isim) return message.channel.send(`isim girmelisin`)
if(!yaş) return message.channel.send(`yaş girmelisin`)
await member.setNickname(`${ayarlar.tag} ${isim} | ${yaş}`)
await member.roles.add(ayarlar.erkek)
await member.roles.remove(ayarlar.kayıtsız)
await db.add(`kayıt-erkek_${message.author.id}`, 1)
await db.set(`son-kayıt_${message.author.id}`, member.id)
const embed = new discord.MessageEmbed()
.setTitle(`${member.user.username} Kayıt oldu`)
.setDescription(`${member} Adlı erkek üyemiz başarıyla kayıt oldu
Kayıt eden yetkili: ${message.author}
Yetkilinin kayıt sayısı için: \`${prefix}kayıt-sayı ${message.author.id}\``)
message.channel.send(embed)
const embed2 = new discord.MessageEmbed()
.setTitle(`${member.user.username} Kayıt oldu`)
.setDescription(`${member} Adlı erkek üyemiz başarıyla kayıt oldu
Kayıt eden yetkili: ${message.author}
Yetkilinin kayıt sayısı için: \`${prefix}kayıt-sayı ${message.author.id}\``)
message.guild.channels.cache.get(ayarlar.kayıtlog).send(embed2)
await db.delete(`katıl-saat_${member.id}`)
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkek"], 
  permLevel: 0
};

exports.help = {
  name: "e",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
