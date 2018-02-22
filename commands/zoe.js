exports.run = (client, message) => {
  message.channel.send('.')
    .then(msg => {
      msg.edit(`._.`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'zoe',
  description: 'Kay.....Zoe',
  usage: 'zoe'
};
