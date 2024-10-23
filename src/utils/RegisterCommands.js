require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  // {
  //   name: 'ping',
  //   description: 'Replies with Pong!'
  // },
  // {
  //   name: 'add',
  //   description: 'Adds two numbers together.',
  //   options: [
  //     {
  //       name: 'first-number',
  //       description: 'The first number to add.',
  //       type: ApplicationCommandOptionType.Number,
  //       required: true,
  //       deleted: true
  //     },
  //     {
  //       name: 'second-number',
  //       description: 'The second number to add.',
  //       type: ApplicationCommandOptionType.Number,
  //       required: true,
  //       deleted: true
  //     }
  //   ]
  // }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
    console.log('Slash commands registered!');
  } catch (error) {
    
    console.error(`Error: ${error}`);
  }
  })();