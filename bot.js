const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
const { Database } = require("wio.db")
const db = new Database("Genel")
var prefix = ayarlar.prefix;

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ
client.on("message", message => {
  moment.locale("tr")
  if(message.content.toLowerCase() === "tag") {
    message.channel.send(`\`☤\``)
  }
})
client.on("guildMemberAdd", async member => {
  if (member.bot) return;
  await member.setNickname(`☤ İsim | Yaş`)
  await member.roles.add("816210428489236500")
  let guild = member.guild
  let kanal = guild.channels.cache.get("816210468670275594")
  let süre = member.user.createdAt
  let koruma; {if(süre > 604800000){koruma = "<a:x_:818861889400209419> Güvenilmez"} else {koruma = "<a:tik:819295530164945006> Güvenilir"}}
  const embed = new Discord.MessageEmbed()
  .setDescription(`
<a:star_red:818810167490510900> ${member} Aramıza katıldı.
**Hoşgeldin \`\`${member.user.username}\`\`!**

<a:galp:818857966157168682> **Kayıt olmak için ses teyit kanallarına geçerek yetkilileri bekleyebilirsin.**

<a:dadl2:818857473045561375> Seninle birlike **${guild.memberCount()}** kişiyiz!

<a:dadl1:818857407743524902> **Tagımızı alarak bize destek olabilirsin (☤)**

>**Kuruluş zamanı: **${moment(süre).format('LLLL')}
>**Bu kullanıcı :**${koruma}
`)
  .setImage("https://media.discordapp.net/attachments/818786067524091933/818839756678889492/ezgif.com-gif-maker_2.gif")
  kanal.send(embed)
})
////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Adet Komut Yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen Komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};


client.login(process.env.token);
