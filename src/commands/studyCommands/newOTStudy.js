const StudyStatus = require('../../models/StudyStatus')
const { ApplicationCommandOptionType } = require('discord.js')

module.exports = {
  name: 'newotstudy',
  description: 'Sets the book from Old Testament as the current study topic',
  options: [
    {
      name: 'otbook',
      description: 'The OT Book for our current study',
      type: ApplicationCommandOptionType.String,
      required: true
    }
  ],
  callback: async (client, interaction) => {
    try {
      // Get the input from the interaction
      const otBook = interaction.options.getString('otbook');

      // Find and update the existing study status or create a new one
      let studyStatus = await StudyStatus.findOne({}); // Assuming you only have one document for study status
      
      if (!studyStatus) {
        // If there is no document, create a new one
        studyStatus = new StudyStatus({
          otStudyBook: otBook
        });
      } else {
        // Update the existing document with the new OT book
        studyStatus.otStudyBook = otBook;
      }

      // Save the updated (or new) document to the database
      await studyStatus.save();

      // Respond to the interaction
      await interaction.reply(`The Old Testament book of study has been updated to: **${otBook}**`);

    } catch (error) {
      console.error(error);
      await interaction.reply('There was an error while updating the OT book of study. Please try again later.');
    }
  }
}