

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User = require('./schema');
// const { generateUniqueUsername } = require('./username_generator');

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://supermanhappyvy:Byasyadav1*@cluster0.9nm1yqx.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB', error);
// });

// app.post('/users', async (req, res) => {
//   try {
//     const { name, gender, yearOfStudy, phoneNumber, age, favouritePlaceInCampus, bio, profile_avatar } = req.body;
//     const username = generateUniqueUsername();
//     const userData = { 
//       name, 
//       gender, 
//       yearOfStudy, 
//       phoneNumber, 
//       age, 
//       favouritePlaceInCampus, 
//       bio, 
//       username, 
//       profile_avatar 
//     };
//     const user = new User(userData);
//     await user.save();
//     res.status(201).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.get('/allusers', async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./schema');
const { generateUniqueUsername } = require('./username_generator');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://supermanhappyvy:Byasyadav1*@cluster0.9nm1yqx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.post('/users', async (req, res) => {
  try {
    const { name, gender, yearOfStudy, phoneNumber, age, favouritePlaceInCampus, bio, profile_avatar } = req.body;
    const username = generateUniqueUsername();
    const userData = { 
      name, 
      gender, 
      yearOfStudy, 
      phoneNumber, 
      age, 
      favouritePlaceInCampus, 
      bio, 
      username, 
      profile_avatar 
    };
    const user = new User(userData);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/allusers', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// New endpoint to fetch a random profile
app.get('/random-profile', async (req, res) => {
  try {
    const count = await User.countDocuments();
    const random = Math.floor(Math.random() * count);
    const randomUser = await User.findOne().skip(random);
    res.send(randomUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



