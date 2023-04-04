const Discord = require('discord.js');
const db = require('croxydb');

exports.run= async(client, message, args) => {
    let dil = await db.get(`dil_${message.guild.id}`)
    let prefix = "?"

    if (!dil) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Komutu kullanmak için dil ayarlaman gerekiyor. \n**${prefix}dil-sistemi tr_TR** \n\nTo use the command, you need to set a language. \n**${prefix}lang-system en_US**`)
    .setColor("RED"))


    if(dil === 'tr_TR') {
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`**Gecikme: ${client.ws.ping}ms**`)
    .setColor("GREEN"))
    }

    if(dil === 'en_US') {
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`**Ping: ${client.ws.ping}ms**`)
    .setColor("GREEN"))
}


}
exports.conf = {
aliases: ["gecikme"]
}

exports.help = {
name: "ping"
}