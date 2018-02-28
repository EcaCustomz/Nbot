exports.run = (client, message) => {
  message.channel.send('(╯>ᗝ<）╯︵ ┻━┻')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lose'],
  permLevel: 0
};

exports.help = {
  name: 'fail',
  description: 'Failiure',
  usage: 'fail'
};
