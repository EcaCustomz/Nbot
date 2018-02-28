exports.run = (client, message) => {
  message.channel.send('https://soundcloud.com/mcmangos/today-funny')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'date',
  description: 'tells the date',
  usage: 'date'
};
