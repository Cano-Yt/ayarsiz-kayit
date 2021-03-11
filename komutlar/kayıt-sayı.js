const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
let erkek; {if(!db.get(`kayıt-erkek_${member.id}`)){erkek=0}else{erkek=db.get(`kayıt-erkek_${member.id}`)}}
let kadın; {if(!db.get(`kayıt-kadın_${member.id}`)){kadın=0}else{kadın=db.get(`kayıt-kadın_${member.id}`)}}
let son_kayıt; {if(!db.get(`son-kayıt_${member.id}`)){son_kayıt="**Yok**"}else{son_kayıt= `<@!${db.get(`son-kayıt_${member.id}`)}>`}}
let toplam = kadın + erkek
const embed = new discord.MessageEmbed()
.setDescription(`${member} Adlı üyenin kayı sayıları
<a:kz:818847044692213760> Kadın: **${kadın}**
<a:erkek:818847080461893673> Erkek: **${erkek}**
<a:star_red:818810167490510900> Toplam: **${toplam}**\n
<a:fires:818847474826477588> Son kayıt'ı;
${son_kayıt}`)
message.channel.send(embed)
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-sayı","k-say"], 
  permLevel: 0
};

exports.help = {
  name: "kayıtsayı",
  description: "Örnek açıklama.", 
  usage: ".örnek <kullanım>"
};
