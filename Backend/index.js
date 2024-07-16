

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

// // New endpoint to fetch a random profile
// app.get('/random-profile', async (req, res) => {
//   try {
//     const count = await User.countDocuments();
//     const random = Math.floor(Math.random() * count);
//     const randomUser = await User.findOne().skip(random);
//     res.send(randomUser);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User = require('./schema');
// const admin=require('firebase-admin');
// const { generateUniqueUsername } = require('./username_generator');



// const serviceAccount = require('./serviceAccountKey.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });



// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://supermanhappyvy:Byasyadav1*@cluster0.9nm1yqx.mongodb.net/FirebaseUser', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB', error);
// });


// app.post('/FirebaseUser', async (req, res) => {
//   try{

//     const {uid,email,name}=req.body;
//     const userData={uid,email};
//     const user=new User(userData);
//     await user.save();
//     res.status(201).send(user);
//   }
//   catch(error){
//     res.status(400).send(error);
//   }
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

// // New endpoint to fetch a random profile
// app.get('/random-profile', async (req, res) => {
//   try {
//     const count = await User.countDocuments();
//     const random = Math.floor(Math.random() * count);
//     const randomUser = await User.findOne().skip(random);
//     res.send(randomUser);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.post('/syncUser', async (req, res) => {
//   const { uid } = req.body;

//   try {
//     const userRecord = await admin.auth().getUser(uid);
//     const userData = {
//       uid: userRecord.uid,
//       email: userRecord.email
//     };

//     const existingUser = await User.findOne({ uid: userRecord.uid });
//     if (existingUser) {
//       await User.updateOne({ uid: userRecord.uid }, userData);
//       res.status(200).send({ message: 'User updated successfully' });
//     } else {
//       const user = new User(userData);
//       await user.save();
//       res.status(201).send({ message: 'User created successfully', user });
//     }
//   } catch (error) {
//     res.status(500).send({ message: 'Error syncing user', error });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



// server.js


// working
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const admin = require('firebase-admin');
// const User = require('./schema');
// const FirebaseUser=require('./schema2');
// const { generateUniqueUsername } = require('./username_generator');
// const dotenv = require('dotenv');
// dotenv.config();
// // Initialize Firebase Admin SDK
// // const serviceAccount = require('./serviceAccountKey.json'); 

// // Update this path if necessary
// const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());


// mongoose.connect('mongodb+srv://supermanhappyvy:Byasyadav1*@cluster0.9nm1yqx.mongodb.net/FirebaseUser', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(() => {
//     console.log('Connected to MongoDB');
//   }).catch((error) => {
//     console.error('Error connecting to MongoDB', error);
//   });

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

// // Endpoint to fetch a random profile
// app.get('/random-profile', async (req, res) => {
//   try {
//     const count = await User.countDocuments();
//     const random = Math.floor(Math.random() * count);
//     const randomUser = await User.findOne().skip(random);
//     res.send(randomUser);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // New endpoint to sync Firebase user data
// app.post('/syncUser', async (req, res) => {
//   const { uid, email, name } = req.body;
//   try {
//     const userData = { uid, email, name };

//     const existingUser = await FirebaseUser.findOne({ uid });
//     if (existingUser) {
//       await FirebaseUser.updateOne({ uid }, userData);
//       console.log('User updated:', userData);
//       res.status(200).send({ message: 'User updated successfully' });
//     } else {
//       const user = new FirebaseUser(userData);
//       await user.save();
//       console.log('User created:', userData);
//       res.status(201).send({ message: 'User created successfully', user });
//     }
//   } catch (error) {
//     console.error('Error syncing user:', error);
//     res.status(500).send({ message: 'Error syncing user', error });
//   }
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });








const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require('firebase-admin');
const User = require('./schema');
const FirebaseUser=require('./schema2');
const { generateUniqueUsername } = require('./username_generator');
const dotenv = require('dotenv');
dotenv.config();
// Initialize Firebase Admin SDK
// const serviceAccount = require('./serviceAccountKey.json'); 

// Update this path if necessary
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://supermanhappyvy:Byasyadav1*@cluster0.9nm1yqx.mongodb.net/FirebaseUser', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

  app.post('/users', async (req, res) => {
    try {
      const { uid, name, gender, yearOfStudy, phoneNumber, age, favouritePlaceInCampus, bio, profile_avatar } = req.body;
      const username = generateUniqueUsername();
      const userData = { 
        uid, 
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

// Endpoint to fetch a random profile
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









app.post('/send-friend-request', async (req, res) => {
    try {
      const { requesterUid, recipientUid } = req.body;
      const recipient = await User.findOne({ uid: recipientUid });
      
      if (!recipient) {
        return res.status(404).send({ error: 'Recipient not found' });
      }
  
      recipient.friendRequests.push(requesterUid);
      await recipient.save();
      res.send({ message: 'Friend request sent' });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Endpoint to accept a friend request
  app.post('/accept-friend-request', async (req, res) => {
    try {
      const { requesterUid, recipientUid } = req.body;
      const recipient = await User.findOne({ uid: recipientUid });
  
      if (!recipient) {
        return res.status(404).send({ error: 'Recipient not found' });
      }
  
      const requester = await User.findOne({ uid: requesterUid });
  
      if (!requester) {
        return res.status(404).send({ error: 'Requester not found' });
      }
  
      recipient.friends.push(requesterUid);
      requester.friends.push(recipientUid);
  
      recipient.friendRequests = recipient.friendRequests.filter(uid => uid !== requesterUid);
      
      await recipient.save();
      await requester.save();
      
      res.send({ message: 'Friend request accepted' });
    } catch (error) {
      res.status(500).send(error);
    }
  });


// Endpoint to reject a friend request
app.post('/reject-friend-request', async (req, res) => {
  try {
    const { requesterUid, recipientUid } = req.body;
    const recipient = await User.findOne({ uid: recipientUid });

    if (!recipient) {
      return res.status(404).send({ error: 'Recipient not found' });
    }

    recipient.friendRequests = recipient.friendRequests.filter(uid => uid !== requesterUid);
    
    await recipient.save();
    
    res.send({ message: 'Friend request rejected' });
  } catch (error) {
    res.status(500).send(error);
  }
});

  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



