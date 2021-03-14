const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;
const moment = require("moment")
moment.locale("tr")
exports.run = async(client, message, args) => {
let member = message.mentions.members.first() ||message.guild.members.cache.get(args[0])
let isim = args[1]
let yaş = args[2]
if(!message.member.roles.cache.has(ayarlar.kayıtsız)) return message.channel.send(`<a:x_:818861889400209419> Bu komutu kullanabilmek için \`${message.guild.roles.cache.get(ayarlar.kayıtsız).name}\` Rolüne sahip olmalısın`)
if(!member) return message.channel.send(`<a:x_:818861889400209419> Bir kullanıcı etiketle veya idsini gir`)
if(!member.roles.cache.has(ayarlar.kayıtyetkili)) return message.channel.send(`<a:x_:818861889400209419> Kullanıcıda \`${message.guild.roles.cache.get(ayarlar.kayıtyetkili).name}\` Rolü olması lazım`)
if(!isim) return message.channel.send(`<a:x_:818861889400209419> isim girmelisin`)
if(!yaş) return message.channel.send(`<a:x_:818861889400209419> yaş girmelisin`)
await member.setNickname(`☤ ${isim} | ${yaş}`)
await member.roles.add(ayarlar.kız)
await member.roles.remove(ayarlar.kayıtsız)
await db.add(`kayıt-kız_${message.author.id}`, 1)
await db.set(`son-kayıt_${message.author.id}`, member.id)
const embed = new discord.MessageEmbed()
.setTitle(`${member.username} Kayıt oldu`)
.setDescription(`${member} Adlı kadın üyemiz başarıyla kayıt oldu <a:dans3:819172293090738187>
Kayıt eden yetkili: ${message.author}
Yetkilinin kayıt sayısı için: \`${prefix}kayıt-sayı ${message.author}\``)
message.channel.send(embed)
const embed2 = new discord.MessageEmbed()
.setTitle(`${member.username} Kayıt oldu`)
.setDescription(`${member} Adlı kadın üyemiz başarıyla kayıt oldu <a:dans3:819172293090738187>
Kayıt eden yetkili: ${message.author}
Yetkilinin kayıt sayısı için: \`${prefix}kayıt-sayı ${message.author}\`
Yetkilinin kayıt ettiği saat: **${moment().format("LLLL")}**
Üyenin katıldığı saat: **${moment(member.cratedAt).format("LLLL")}**`)
message.guild.channels.cache.get(ayarlar.kayıtlog).send(embed2)
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kız","kadın"], 
  permLevel: 0
};

exports.help = {
  name: "k",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
