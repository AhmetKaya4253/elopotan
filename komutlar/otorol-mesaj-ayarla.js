const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ("!");
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(' Otorol mesajı için 5 değişken desteklenmektedir. Bunlar -uyetag- -uye- -uyesayisi- -rol- ve -server- dir.\nÖrnek: `c?otorol-mesaj-ayarla -uye- hoş geldin! Senle beraber -uyesayisi- kişiyiz!`')
  
 message.channel.send(' Otorol mesajı başarıyla `'+mesaj+'` olarak ayarlandı!') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-mesaj-ayarla']
  };
  
  exports.help = {
    name: 'otorol-mesaj',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };