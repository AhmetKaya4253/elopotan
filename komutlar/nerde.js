const Discord = require('discord.js')

exports.run = async (client, message, args) => {
        // Let
        let member = message.mentions.users.first() || this.client.users.cache.get(args[0]);
        
        // İf
        if(!member){
            const Pâyidar = new Discord.MessageEmbed()
            .setDescription(`❌ | ${message.author} **Lütfen Kişi Etiketleyin.**`)
            .setColor('Black')
            .setFooter('Elopotan Bot')
            return message.channel.send(Pâyidar).then(Pâyidar => {Pâyidar.delete({timeout: 5000})})
        }
            
        // Kanal Error
        let kanal = message.guild.members.cache.get(member.id).voice.channel;
        if(!kanal) {
            const Pâyidar = new Discord.MessageEmbed()
            .setDescription(`❌ | ${message.author} **Kişi Ses Kanalında Bulunmuyor.**`)
            .setColor('Black')
            .setFooter('Elopotan Bot')
            return message.channel.send(Pâyidar).then(Pâyidar => {Pâyidar.delete({timeout: 5000})})
        }

        let microphone = message.guild.members.cache.get(member.id).voice.selfMute ? '❌' : '✅';
        let headphones = message.guild.members.cache.get(member.id).voice.selfDeaf ? '❌' : '✅';
        let sestekiler = message.guild.channels.cache.get(kanal.id).members.map(x => x.user).join(", ");
        
        kanal.createInvite().then(invite =>
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`
        ✅ | ${member} **Kişisi** [${kanal.name}](https://discord.gg/${invite.code}) **Kanalında**\n
            **Mikrofon** - ${microphone}
            **Kulaklık** - ${headphones}\n
            **Odadaki Kişiler;** ${sestekiler}`).setColor('Black').setFooter('Elopotan Bot')))
        
        // React
        message.react('✅')
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nerde', 'nerede'],
    permLevel: 0
}

exports.help = {
    name: 'kisi-nerde'
}