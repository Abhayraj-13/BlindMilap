// const port=4000;
// const express=require('express');
// const app=express();
// const mongoose=require('mongoose');
// const jwt=require('jsonwebtoken');
// const cors=require('cors');
// const bodyParser=require('body-parser');


// app.use(express.json());
// app.use(cors());









// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const User = require('./schema'); // Import the schema

const app = express();
const port = process.env.PORT || 4000; // Changed to port 4000

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://supermanhappyvy:Byasyadav1*@cluster0.9nm1yqx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

// Routes
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
