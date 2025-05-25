const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // Duration in months or weeks, as per your requirement
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  subjects: {
    type: [String], // Array of subject names covered in the course
    required: true
  },
  schedule: {
    type: String, // Weekly schedule for classes, e.g., "Mon-Fri, 5 PM - 7 PM"
    // required: true
  },
  startDate: {
    type: Date,
    // required: true
  },
  endDate: {
    type: Date
  },
  teachers: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
    // required: true
  },
  students: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
