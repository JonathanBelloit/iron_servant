const { Client, GatewayIntentBits, Events, ActivityType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
// const { token } = require('./config.json');
client.config = require('./config.json')

client.once(Events.ClientReady, clientReady => {
  clientReady.user.setActivity(`Studying Scripture!`, { type: ActivityType.Custom });
  console.log(`Ready! Logged in as ${clientReady.user.tag}`);
});

client.on(Events.MessageCreate, message => {
  if (message.author.bot) return;

  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login(client.config.token);
