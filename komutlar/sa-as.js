const Discord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
        // Aç
        if(args[0] === "aç"){
            db.set(`pâyidarsaas_${message.guild.id}`, 'aktif')

            // Mesaj
            const Pâyidar = new Discord.MessageEmbed()
            .setDescription(`**Selam, Sistemi Başarıyla Aktif Hale Getirdim.**`)
            .setColor('#00ff00')
            message.channel.send(Pâyidar)
        }
        
        // Kapat
        if(args[0] === "kapat"){
            db.delete(`pâyidarsaas_${message.guild.id}`)

            // Mesaj
            const Pâyidar = new Discord.MessageEmbed()
            .setDescription(`**Sistemi Başarıyla Devre Dışı Bıraktım.**`)
            .setColor('#ff0000')
            message.channel.send(Pâyidar)
        }
    } // Pâyidar

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Sa-As','Sa-as','SA-AS','sa-As','sa-AS'],
    permLevel: 0
}

exports.help = {
    name: 'sa-as'
}