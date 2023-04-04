let Discord = require("discord.js");
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  let sebep = args.slice(1).join(' ')
  let user = message.mentions.users.first()
    if(!user) return message.channel.send(new Discord.MessageEmbed().setDescription(`İntihar Edecek Kişiyi Etiketlemelisin`).setColor(hata))
    if(!sebep) return message.channel.send(new Discord.MessageEmbed().setDescription(`İntihar Sebepini Yazmalısın!`).setColor(hata))

  let embed = new Discord.MessageEmbed()
  .setDescription(`**${user} Adlı Kişi ${sebep} Nedeniyle İntihar Etti!**`)
  .setColor(oldu)
  .setImage('https://33.media.tumblr.com/8fa392f59fa851a743dbd4d1f7f78979/tumblr_nedlrnx6wE1tlc35wo1_500.gif')
  message.channel.send(embed)

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["intiharet", "geber"],
  permLevel: 0
};

module.exports.help = {
  name: 'intihar-et'
};