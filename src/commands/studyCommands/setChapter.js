const StudyStatus = require('../../models/StudyStatus');
const { ApplicationCommandOptionType } = require('discord.js')

module.exports = {
  name: 'setchapter',
  description: 'Set the current chapter of the current study and update the current study status',
  options: [
    {
      name: 'oldornewtestament',
      description: 'Set the current chapter of the Old or New Testament study',
      type: ApplicationCommandOptionType.String,
      required: true
    },
    {
      name: 'chapter',
      description: 'The chapter number to set',
      type: ApplicationCommandOptionType.Number,
      required: true
    }
  ],
  callback: async (client, interaction) => {
    try {
      // Find the study status document
      const studyStatus = await StudyStatus.findOne({});
      // Get the current chapter of the study based on the interaction options
      const currentStudy = interaction.options.getString('oldornewtestament');
      const chapter = interaction.options.getNumber('chapter');

      if (currentStudy === 'ot') {
        studyStatus.otStudyChapter = chapter;
      } else if (currentStudy === 'nt') {
        studyStatus.ntStudyChapter = chapter;
      } else {
        await interaction.reply('Invalid study type. Please use "ot" or "nt".');
        return;
      }
      // Save the updated study status
      await studyStatus.save();
      // Reply to the interaction
      await interaction.reply(`The current chapter of the ${currentStudy} study has been set.`);
    } catch (error) {
      console.error(error);
      await interaction.reply('There was an error updating the current chapter of the study. Please try again later.');
    }
  }
};


