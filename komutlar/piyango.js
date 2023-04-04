const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(' ```Acaba Kazanabilecek Mi?``` ').then(message => {
      var espriler = ['**Tebrikler! Piyangoyu Kazandınız!**','**Üzgünüm, Kaybettin.**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'piyango',
  description: 'Acaba Kazanabilecek Misin?',
  usage: 'piyango'
};