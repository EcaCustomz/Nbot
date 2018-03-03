exports.run = (client, message, channel) => {
      message.channel.send(`https://media.discordapp.net/attachments/390324790990471179/417108214832824361/Screenshot_20180223-235412.jpg?width=477&height=474`);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'billy',
  description: 'shows the god himself',
  usage: 'billy'
};
