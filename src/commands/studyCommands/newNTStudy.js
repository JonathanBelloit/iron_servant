const StudyStatus = require('../../models/StudyStatus')
const { ApplicationCommandOptionType } = require('discord.js')

module.exports = {
  name: 'newntstudy',
  description: 'Sets the book from New Testament as the current study topic',
  options: [
    {
      name: 'ntbook',
      description: 'The NT Book for our current study',
      type: ApplicationCommandOptionType.String,
      required: true
    }
  ],
  callback: async (client, interaction) => {
    try {
      // Get the input from the interaction
      const ntBook = interaction.options.getString('ntbook');

      // Find and update the existing study status or create a new one
      let studyStatus = await StudyStatus.findOne({}); // Assuming you only have one document for study status
      
      if (!studyStatus) {
        // If there is no document, create a new one
        studyStatus = new StudyStatus({
          ntStudyBook: ntBook
        });
      } else {
        // Update the existing document with the new NT book
        studyStatus.ntStudyBook = ntBook;
      }

      // Save the updated (or new) document to the database
      await studyStatus.save();

      // Respond to the interaction
      await interaction.reply(`The New Testament book of study has been updated to: **${ntBook}**`);

    } catch (error) {
      console.error(error);
      await interaction.reply('There was an error while updating the NT book of study. Please try again later.');
    }
  }
}