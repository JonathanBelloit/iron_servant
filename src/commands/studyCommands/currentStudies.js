const StudyStatus = require('../../models/StudyStatus');

module.exports = {
  name: 'currentstudies',
  description: 'View the current Old Testament and New Testament books of study',
  callback: async (client, interaction) => {
    try {
      // Retrieve the current study status from the database
      const studyStatus = await StudyStatus.findOne({});

      if (!studyStatus) {
        // If there is no document, let the user know
        await interaction.reply('No current studies are set. Please use `/newOTStudy` or `/newNTStudy` to set a study book.');
      } else {
        // If study status is found, reply with the current studies
        const otStudy = studyStatus.otStudyBook ? `Old Testament: **${studyStatus.otStudyBook}**` : 'Old Testament: Not set';
        const ntStudy = studyStatus.ntStudyBook ? `New Testament: **${studyStatus.ntStudyBook}**` : 'New Testament: Not set';

        await interaction.reply(`Current Studies:
${otStudy} Chapter ${studyStatus.otStudyChapter}
${ntStudy} Chapter ${studyStatus.ntStudyChapter}`);
      }
    } catch (error) {
      console.error(error);
      await interaction.reply('There was an error while retrieving the current studies. Please try again later.');
    }
  }
};