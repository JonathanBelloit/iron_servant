const { Client, GatewayIntentBits, Events, ActivityType } = require('discord.js');
const eventHandler = require('./src/handlers/eventHandler');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
// const { token } = require('./config.json');
client.config = require('./config.json');
// client.cooldowns = new Map();
// client.cache = new Map();

// require('./utils/RegisterCommands')(client);
require('./src/utils/RegisterCommands');

eventHandler(client);

// client.once(Events.ClientReady, clientReady => {
//   clientReady.user.setActivity(`Studying Scripture!`, { type: ActivityType.Custom });
//   console.log(`Ready! Logged in as ${clientReady.user.tag}`);
// });

// client.on(Events.MessageCreate, message => {
//   if (message.author.bot) return;

//   if (message.content === 'ping') {
//     message.channel.send('pong');
//   }

//   if (message.content === 'add') {
//     const num1
//   }
// });

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'ping') {
    interaction.reply('Pong!');
  };
  if (interaction.commandName === 'add') {
    const num1 = interaction.options.getNumber('first-number');
    const num2 = interaction.options.getNumber('second-number');
    interaction.reply(`${num1} + ${num2} = ${num1 + num2}`);
  }
});

client.login(client.config.token);
