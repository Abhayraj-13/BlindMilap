
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
    const username = generateUniqueUsername();
    const userData = { ...req.body, username };
    const user = new User(userData);
    await user.save();
    res.status(201).send(user);  // Ensure this sends the user including the username
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

app.listen(port, () => {
  const username = generateUniqueUsername();
  console.log('Generated username:', username);
  console.log(`Server is running on port ${port}`);
});
