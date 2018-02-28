exports.run = (client, message) => {
  message.channel.send(`${message.author} slapped ${message.mentions.members.first()}`)
    .then(msg => {
      msg.channel.send(`https://giphy.com/gifs/ifc-comedy-the-naked-gun-leslie-nelson-l2SpSQLpViJk9vhmg`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slap',
  description: 'slaps a user',
  usage: 'slap'
};
