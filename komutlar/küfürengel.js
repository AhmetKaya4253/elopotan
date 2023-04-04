
//---Bu Kod komutlar klasörüne atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###CMF

const Discord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
        // Eğer kullanıcı herhangi bir durum belirtmediyse ona uyarı mesajı atalım
        if(!args[0]){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Reklam Engel Sistemini Açabilmek & Kapatabilmek İçin \`.reklam-engel aç\`, \`.reklam-engel kapat\``)
            .setColor('#36393F')
            return message.channel.send(cmfhata)
        }

        // Eğer komutu kullanan kişi Aç & Kapat belirttiyse Data işlmelerini yapalım
        if(args[0] === 'aç'){
            // Data İşemeleri
            db.set(`linkcodemarefi_${message.guild.id}`, 'codemarefiaktif')

            // Bilgilendirme Mesajı
            const sistemaktif = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Reklam Engel Sistemini Başarılı Bir Şekilde Açtınız. Eğer Kaptmak İstersenizde** \`.reklam-engel kapat\``)
            .setColor('#36393F')
            return message.channel.send(sistemaktif)
        }

        if(args[0] === 'kapat'){
            // Data İşemeleri
            db.delete(`linkcodemarefi_${message.guild.id}`)

            // Bilgilendirme Mesajı
            const sistemdevredişi = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Reklam Engel Sistemini Başarılı Bir Şekilde Kapattınız. Eğer Açmak İstersenizde** \`.reklam-engel aç\``)
            .setColor('#36393F')
            return message.channel.send(sistemdevredişi)
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Reklam engel','REKLAM ENGEL', 'reklam engel','Reklam-engel','REKLAM-ENGEL'],
    permLevel: 0
}

exports.help = {
    name: 'reklam-engel'
}

// Discord.js v12 Kod Paylaşım, Discord v12 Kodlar, Discord Bot Nasıl Yapılır, Discord.js Hazır Botlar Kodlar, Discord v12 Bot Kod Paylaşım Sitesi