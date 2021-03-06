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
  console.log(moment(Date.now()).format("LLLL") + " Ping tamamdır.");
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
    message.channel.send(`\`${ayarlar.tag}\``)
  }
})
client.on("guildMemberAdd", async member => {
  if (member.bot) return;
  await member.setNickname(`${ayarlar.tag} İsim | Yaş`)
  await member.roles.add(ayarlar.kayıtsız)  
  let guild = member.guild
  let kanal = guild.channels.cache.get(ayarlar.kayıtkanal)
  let süre = member.user.createdAt
  let koruma; {if(moment(süre).format('L') < moment(süre).subtract(7, 'days').calendar()){koruma = "Güvenilmez"} else {koruma = "Güvenilir"}}
  await db.set(`katıl-saat_${member.id}`, moment().format("LLLL"))
  const embed = new Discord.MessageEmbed()
  .setDescription(`
${member} Aramıza katıldı.
**Hoşgeldin \`\`${member.user.username}\`\`!**

**Kayıt olmak için ses teyit kanallarına geçerek yetkilileri bekleyebilirsin.**

Seninle birlike **${member.guild.members.cache.size}** kişiyiz!

**Tagımızı alarak bize destek olabilirsin (${ayarlar.tag})**

> **Kuruluş zamanı: **${moment(süre).format('LLLL')}
> **Bu kullanıcı: **${koruma}
`)
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
