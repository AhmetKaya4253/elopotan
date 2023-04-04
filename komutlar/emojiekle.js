const Discord = require('discord.js');

exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bu komutu kullanabilmek için `Emojileri Yönet` yetkisine sahip olmalısın.');
if(!args[0]) return message.channel.send('Bir link ve ad yazmalısın. `e!emojiekle https://cdn.discordapp.com/emojis/601379275769118731.png erensibot`');
if(!args[0].endsWith('.png')) return message.channel.send('Doğru bir link yazmalısın.');
if(!args[1]) return message.channel.send('Bir emoji adı yazmalısın. `e!emojiekle https://cdn.discordapp.com/emojis/601379275769118731.png erensibot`');
if(['ç', 'ö', 'ü', 'ş', 'İ', 'I', 'ğ', 'Ç', 'Ö', 'Ü', 'Ş', 'Ğ'].includes(args[1])) return message.channel.send('**Emoji adını yazarken Türkçe karakter kullanmamalısın!**');
message.guild.emojis.create(args[0], args.slice(1).join(' ')).then(s => {
message.channel.send(`${s.name} adında emoji oluşturuldu. (${s})`);
});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojiekle'],
  permLevel: 0
};
 
exports.help = {
  name: 'emoji-ekle'
};// codare ♥