const { Schema, model } = require('mongoose');

const StudySchema = new Schema({
  ntStudyBook: {
    type: String,
    required: false,
  },
  ntStudyChapter: {
    type: Number,
    default: 1,
  },
  otStudyBook: {
    type: String,
    required: false,
  },
  otStudyChapter: {
    type: Number,
    default: 1,
  }
})

module.exports = model('StudyStatus', StudySchema);
