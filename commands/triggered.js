exports.run = (client, message) => {
  message.channel.send('https://i.imgur.com/PijcGEU.gif')
  
};

 //https://media.discordapp.net/attachments/390324790990471179/417108214832824361/Screenshot_20180223-235412.jpg?width=477&height=474


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['t'],
  permLevel: 0
};

exports.help = {
  name: 'triggered',
  description: 'displays gif of triggered text',
  usage: 'triggered'
};