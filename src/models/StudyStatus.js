const { Schema, model } = require('mongoose');

const StudySchema = new Schema({
  ntStudyBook: {
    type: String,
    required: true,
  },
  ntStudyChapter: {
    type: Number,
    required: true,
  },
  otStudyBook: {
    type: String,
    required: true,
  },
  otStudyChapter: {
    type: Number,
    required: true,
  }
})

module.exports = model('StudyStatus', StudySchema);
