const db = require("quick.db");
const Discord = require("discord.js");
const moment = require('moment');
exports.run = async (client, message, args) => {
  let u = message.mentions.members.first();
  if (!args[0])
    return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Lütfen !premium kullan, kontrol veya kodum Yazın`));

  if (args[0] == "ver"  || args[0] == "oluştur") {
    const yetki = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Sen Kurucum Değilsin!`);
    if (message.author.id !== "718802106747977818")
      return message.channel.send(yetki);
    if (!u) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Birini Etiketle"));
    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
    let kod = makeid(25);
    console.log(kod + ` Kodunu ${u} İçin Oluşturdum!`);
    db.push(`pre.${u.id}`, { code: kod });
    console.log(db.fetch(`pre.${u.id}`).code)
    u.send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Premim`)
      .setDescription(
        `Bu Kodu İstediğin Bir Sunucuda Kullanabilirsin!\nKodun: ${kod} \nKodu Kullanmak İçin: !premium kullan (kod) kullan `
      ));
     message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Kodu Oluşturdum ve Gönderdim!`));
  }
  if (args[0] == "sil" || args[0] == "al") {
    if (message.author.id !== "718802106747977818")
      return message.channel.send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Sen Kurucum Değilsin!`));

    if (!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Bir Sunucunun ID'sini Gir.`));
    let id = args[1];
    if (isNaN(id)) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Sadece Sayı Girebilirsin.`));

    if (!client.guilds.cache.get(id))
      return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${id}**li Sunucusuyu Bulamıyorum.`));
    let pr = await db.fetch(`premium.${id}`);
    if (!pr)
      return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${client.guilds.cache.get(id).name}** Zaten Premium Aktif Değil.`));

    db.delete(`premium.${id}`);
    message.channel.send(
      `${
        client.guilds.cache.get(id).name
      } İsimli Sunucu İçin **PREMIUM** de-aktif Edildi!`
    );

    let owner = client.guilds.cache.get(id).owner;
    owner.send(
      `Merhaba **${owner.user.username}**! ${
        message.author.tag
      } İsimli Kişi **${
        client.guilds.cache.get(id).name
      }** İsimli Sunucunun Premiumunu Kapattı.`
    );
  } else if (args[0] == "kontrol") {
    let cmd = db.fetch(`premium.${message.guild.id}`);
    if(!cmd) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").addField("Premium:","Aktif Değil"))
      let as = "";
      cmd.map(async k => as += `${k.date}`);
    if(cmd){
      message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").addField("Premium:","Aktif").addField("Premium Olma Tarihi:",as))
    }
    
    
    
  } else if (args[0] == "kullan") {
    let cmd = db.fetch(`pre.${message.author.id}`);
    if(!cmd) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Hiç Premium Kodun Yok! \nKod Almak İçin [Buraya](https://discord.gg/Gm4FkDGx) Gel!"));
    let a = cmd.find(a => a.code === args[1]);
    let pre = db.fetch(`premium.${message.guild.id}`);
    if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Bir Premium Kodu Girmelisin! \nEğer Kodlarını Bilmiyorsan **!premium kodum** Yaz!"));
    if(pre) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Sunucu Zaten **Premium**"));
    if (a) {
      if (cmd.length === 1) {
        db.delete(`pre.${message.author.id}`);
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Başarıyla Kod Kullanıldı.`)
        );
        db.push(`premium.${message.guild.id}`, {date:moment().format("DD-MM-YYYY"), pre:true});
      } else {
        let ex = [];
        cmd.forEach(dbs => {
          if (dbs.code === args[1]) return;
          ex.push(dbs);
          db.set(`pre.${message.author.id}`, ex);
        });
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Başarıyla Kod Kullanıldı.`)
        );
        db.push(`premium.${message.guild.id}`, {date:moment().format("DD-MM-YYYY"), pre:true});
      }
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Premim`)
        .setDescription(`Kod Hatalı Veya Kullanılmış!`)
        .setFooter(`Hata!`));
    }
  } else if (args[0] == "kodum") {
    const a = await db.fetch(`pre.${message.author.id}`);
    if (a) {
      let i = 0;
      let as = "";
      a.map(async k => {
        i++;
        as += `${i}) **${k.code}** \n`;
      });
      let msgs = "";
      if (a.length === 1) msgs="Kodun:"; else msgs="Kodların:";
      message.member.send(
        new Discord.MessageEmbed().setColor("RANDOM").addField(msgs, as)
      );
      let msg = "";
        if (a.length === 1) msg="Kodunu DM'ne Gönderdim!"; else msg="Kodlarını DM'ne Gönderdim!";
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(msg)
      );
    } else {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("Hiç kodun yok!")
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pre"],
  permLevel: 0
};

exports.help = {
  name: "premium",
  description: "",
  usage: "premium"
};//NoName.txt#0001