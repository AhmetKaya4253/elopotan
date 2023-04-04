const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('croxydb');

exports.run = async(client, message, args) => {
    let dil = await db.get(`dil_${message.guild.id}`)
    let prefix = "!"
    
    
    if (!dil) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Komutu kullanmak için dil ayarlaman gerekiyor. \n**${prefix}dil-sistemi tr_TR** \n\nTo use the command, you need to set a language. \n**${prefix}lang-system en_US**`)
    .setColor("RED"))
  if(dil=== 'tr_TR') {
       message.channel.send(' ```Korkutuyorumm...``` ').then(message => {
      var espriler = ['Korktun Mu? \nhttps://tenor.com/view/horror-gif-gif-21770509','Korktun Mu? \nhttps://tenor.com/view/dark-side-scary-creepy-horror-zoom-in-gif-16675625','Korktun Mu? \nhttps://tenor.com/view/monster-chris-monster-lady-zombie-woman-gif-21107084','Korktun Mu? \nhttps://tenor.com/view/monster-gif-9564708','Korktun Mu? \nhttps://tenor.com/view/the-monsters-inc-james-sullivan-scary-monster-gif-3521830','Korktun Mu? \nhttps://tenor.com/view/mutant-monster-upside-down-monster-demogorgon-stranger-things-gif-13771743'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
       });
  }
    if(dil=== 'en_US') {
       message.channel.send(' ```I scare...``` ').then(message => {
      var espriler = ['Are you scared ? \nhttps://tenor.com/view/horror-gif-gif-21770509','Are you scared ? \nhttps://tenor.com/view/dark-side-scary-creepy-horror-zoom-in-gif-16675625','Are you scared ?\nhttps://tenor.com/view/monster-chris-monster-lady-zombie-woman-gif-21107084','Are you scared ? \nhttps://tenor.com/view/monster-gif-9564708','Are you scared ? \nhttps://tenor.com/view/the-monsters-inc-james-sullivan-scary-monster-gif-3521830','Are you scared ? \nhttps://tenor.com/view/mutant-monster-upside-down-monster-demogorgon-stranger-things-gif-13771743'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
       });
  }
  
  
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["scare"],
  permLevel: 0
};

exports.help = {
  name: 'korkut',
  description: 'Acaba Kazanabilecek Misin?',
  usage: 'korkut'
};