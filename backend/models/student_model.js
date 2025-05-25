// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    // required: true
  },
  address: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  subjects: {
    type: [String],  // Example: ["Math", "Physics"]
    default: []
  },
  batch: {
    type: String  // Example: "Morning", "Evening", "Weekend"
  },
  feeStatus: {
    type: String,
    enum: ['Paid', 'Unpaid', 'Partial'],
    default: 'Unpaid'
  },
  role: {
    type: String,
    enum: ['admin', 'manager','student'],
    default: 'student'
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
