


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   gender: {
//     type: String,
//     required: true,
//     enum: ['Male', 'Female', 'Other']
//   },
//   yearOfStudy: {
//     type: Number,
//     required: true,
//     min: 1,
//     max: 6
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//     match: [/^\d{10}$/, 'Please fill a valid phone number']
//   },
//   age: {
//     type: Number,
//     required: true,
//     min: 0
//   },
//   favouritePlaceInCampus: {
//     type: String,
//     trim: true
//   },
//   bio: {
//     type: String,
//     trim: true
//   },
//   username: { // Add the username field
//     type: String,
//     required: true,
//     unique: true
//   },
//   profile_avatar: {
//     type: String,
//     required: true
//   }

// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;




const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
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
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  profile_avatar: {
    type: String,
    required: true
  },
  friendRequests: [{ type: String }], // Store UIDs of users who sent friend requests
  friends: [{ type: String }] // Store UIDs of friends
});

const User = mongoose.model('User', userSchema);

module.exports = User;
