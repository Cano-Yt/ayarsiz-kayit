const discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
let erkek; {if(!db.get(`kayıt-erkek_${member.id}`)){erkek=0}else{erkek=db.get(`kayıt-erkek_${member.id}`)}}
let kadın; {if(!db.get(`kayıt-kız_${member.id}`)){kadın=0}else{kadın=db.get(`kayıt-kız_${member.id}`)}}
let son_kayıt; {if(!db.get(`son-kayıt_${member.id}`)){son_kayıt="**Yok**"}else{if(message.guild.members.cache.get(db.get(`son-kayıt_${member.id}`))) {son_kayıt = message.guild.members.cache.get(db.get(`son-kayıt_${member.id}`))}else{son_kayıt = "Sunucudan çıkmış :c"}}}
const embed = new discord.MessageEmbed()
.setDescription(`${member} Adlı üyenin kayıt sayıları
Kadın: **${kadın}**
Erkek: **${erkek}**
Toplam: **${kadın + erkek}**\n
Son kayıt'ı;
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
