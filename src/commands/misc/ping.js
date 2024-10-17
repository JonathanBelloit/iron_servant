// const { SlashCommandBuilder } = require('@discordjs/builders');

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('ping')
//         .setDescription('Pong!'),
//     async execute(interaction, client) {
//         interaction.reply('Ping Pong!');
//     }
// }

module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    // deleted: Boolean,
  
    callback: (client, interaction) => {
      interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
  };