const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    // unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  
  subject: {
    type: String,
    required: true
  },
  course: {
    type: String,
    ref: 'Course',
    required: true
  },
  pdfBuffer: {
    type: Buffer,
    contentType: String,
    required: true
  },
   instructor: {
    type: String,
    // required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  previewAvailable: {
    type: Boolean,
    default: false
  },
  downloadUrl: {
    type: String,
    required: true
  },
  
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', noteSchema);
