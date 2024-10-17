// const { SlashCommandBuilder } = require('@discordjs/builders');
// const { PermissionFlagBits } = require('discord.js')

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('ban')
//         .setDescription('Bans a member from the server'),
//     async execute(interaction, client) {
//         interaction.reply('Member Banned!');
//     }
// }

module.exports = {
  name: 'ban',
  description: 'Bans a member from the server',
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    interaction.reply(`Member Banned!`);
  },
};