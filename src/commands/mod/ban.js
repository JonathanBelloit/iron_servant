const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a member from the server'),
    async execute(interaction, client) {
        interaction.reply('Member Banned!');
    }
}