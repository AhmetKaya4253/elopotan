const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş geldin kanalını sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Hoş geldin kanalı başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Elopotan`)
message.channel.send(sıfırlandı)
db.delete(`kayıthg_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş geldin kanalını ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Hoş geldin kanalı belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Elopotan`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıthg_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş geldin kanalını ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(`Elopotan Hoş geldin kanalı ${kanal} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Elopotan`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-hg',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: 'dr!kayıt-kanal #kanal'
}