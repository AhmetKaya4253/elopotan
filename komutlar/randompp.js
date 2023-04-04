const AsreaperDiscord = require('discord.js');
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))
  message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["random-pp"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'randompp',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};