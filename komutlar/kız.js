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
if(!member) return message.channel.send(`<a:x_:818861889400209419> Bir kullanıcı etiketle veya idsini gir`)
if(!isim) return message.channel.send(`<a:x_:818861889400209419> isim girmelisin`)
if(!yaş) return message.channel.send(`<a:x_:818861889400209419> yaş girmelisin`)
await member.setNickname(`☤ ${isim} | ${yaş}`)
await member.roles.add("816210418817040415")
await member.roles.remove("816210428489236500")
db.add(`kayıt-kız_${message.author.id}`, 1)
const embed = new discord.MessageEmbed()
.setTitle(`${member.username} Kayıt oldu`)
.setDescription(`${member} Adlı üyemiz başarıyla kayıt oldu <a:dans3:819172293090738187>
Kayıt eden yetkili: ${message.author}
Yetkilinin kayıt sayısı için: \`.kayıt-sayı ${message.author}\``)
message.channel.send(embed)
const embed2 = new discord.MessageEmbed()
.setTitle(`${member.username} Kayıt oldu`)
.setDescription(`${member} Adlı üyemiz başarıyla kayıt oldu <a:dans3:819172293090738187>
Kayıt eden yetkili: ${message.author}
Yetkilinin kayıt sayısı için: \`.kayıt-sayı ${message.author}\`
Yetkilinin kayıt ettiği saat: **${moment().format("LLL")}**
Üyenin katıldığı saat: **moment(member.cratedAt).format("LLL")}**`)
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
