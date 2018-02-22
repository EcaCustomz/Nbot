exports.run = (client, message) => {
  message.channel.send('.')
    .then(msg => {
      msg.edit(`He fucked a robot`);
    });;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c'],
  permLevel: 0
};

exports.help = {
  name: 'chief',
  description: 'zach',
  usage: 'chief'
};
