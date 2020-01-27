const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjY2MTMwNjE3NTQ0NDc0NjU0.Xi59YQ.18hHMrxNRXWf1pdTSQurw77bbyk');