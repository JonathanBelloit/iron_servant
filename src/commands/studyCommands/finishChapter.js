const StudyStatus = require('../../models/StudyStatus');
const { ApplicationCommandOptionType } = require('discord.js')

module.exports = {
  name: 'finishchapter',
  description: 'Finish the current chapter of the current study and update the current study status',
  options: [
    {
      name: 'oldornewtestament',
      description: 'Finish the current chapter of the Old or New Testament study',
      type: ApplicationCommandOptionType.String,
      required: true
    },
  ],
  callback: async (client, interaction) => {
    try {
      // Find the study status document
      const studyStatus = await StudyStatus.findOne({});
      // Get the current chapter of the study based on the interaction options
      const currentStudy = interaction.options.getString('oldornewtestament');
      if (currentStudy === 'ot') {
        studyStatus.otStudyChapter += 1;
      } else if (currentStudy === 'nt') {
        studyStatus.ntStudyChapter += 1;
      } else {
        await interaction.reply('Invalid study type. Please use "ot" or "nt".');
        return;
      }
      // Save the updated study status
      await studyStatus.save();
      // Reply to the interaction
      await interaction.reply(`The current chapter of the ${currentStudy} study has been finished.`);
    } catch (error) {
      console.error(error);
      await interaction.reply('There was an error updating the current chapter of the study. Please try again later.');
    }
  }
};


