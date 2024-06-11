const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  yearOfStudy: {
    type: Number,
    required: true,
    min: 1,
    max: 6
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please fill a valid phone number']
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  favouritePlaceInCampus: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;