const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
const { token } = require('./config.json');

client.once(Events.ClientReady, clientReady => {
  console.log(`Ready! Logged in as ${clientReady.user.tag}`);
});

client.login(token);

// testing