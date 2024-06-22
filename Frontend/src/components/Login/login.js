// import React, { useState } from 'react';
// import './LoginPage.css';
// import NavBar from '../NavBar';
// import ChatBox from '../ChatBox';
// // import CreateProfile from '../CreateProfile/CreateProfile';
// import { auth } from '../../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Container, Box, TextField, Button, Typography } from '@mui/material';
// // import '@fontsource/roboto/300.css';
// // import '@fontsource/roboto/400.css';
// // import '@fontsource/roboto/500.css';
// // import '@fontsource/roboto/700.css';

// const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => (

//   <div className="login-form-container">
//     <Box component="form" onSubmit={handleSubmit} className="login-form">
//       <Typography variant="h4" component="h2" gutterBottom>
//         Login
//       </Typography>
//       <div className="form-group">
//         <TextField
//           label="Email"
//           type="email"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <TextField
//           label="Password"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <Button type="submit" variant="contained" color="primary" fullWidth>
//         Login
//       </Button>
//     </Box>
//     </div>
// );

// const Login = () => {
// const [user] = useAuthState(auth);
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleSubmit = (e) => {
// e.preventDefault();
// // Handle email/password login logic here
// console.log('Email:', email);
// console.log('Password:', password);
// };

// return (
// <div className="App">
// <NavBar />
// {!user ? (
// <LoginForm
//        email={email}
//        setEmail={setEmail}
//        password={password}
//        setPassword={setPassword}
//        handleSubmit={handleSubmit}
//      />
// ) : (
// <ChatBox />
// )}
// </div>
// );
// };

// export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import { auth, db } from '../../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth'; 
// import NavBar from '../NavBar';
// import ChatBox from '../ChatBox';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import './LoginPage.css';

// const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => (
//   <div className="login-form-container">
//     <Box component="form" onSubmit={handleSubmit} className="login-form">
//       <Typography variant="h4" component="h2" gutterBottom>
//         Login
//       </Typography>
//       <div className="form-group">
//         <TextField
//           label="Email"
//           type="email"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <TextField
//           label="Password"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <Button type="submit" variant="contained" color="primary" fullWidth>
//         Login
//       </Button>
//     </Box>
//   </div>
// );

// const Login = () => {
//   const [user] = useAuthState(auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Fetch user profile from Firestore
//       const userProfileRef = doc(db, 'users', user.uid);
//       const userProfileDoc = await getDoc(userProfileRef);

//       if (userProfileDoc.exists()) {
//         const userProfile = userProfileDoc.data();

//         // Check if the user profile is complete
//         if (!userProfile.name || !userProfile.gender || !userProfile.yearOfStudy || !userProfile.phoneNumber || !userProfile.age) {
//           navigate('/createprofile');
//         } else {
//           navigate('/chatbox');
//         }
//       } else {
//         navigate('/createprofile');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <NavBar />
//       {!user ? (
//         <LoginForm
//           email={email}
//           setEmail={setEmail}
//           password={password}
//           setPassword={setPassword}
//           handleSubmit={handleSubmit}
//         />
//       ) : (
//         <ChatBox />
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from '../NavBar';
import ChatBox from '../ChatBox';
import { Box, TextField, Button, Typography } from '@mui/material';
import './LoginPage.css';
import FeedProfileCards from '../FeedPage/FeedProfileCards/FeedProfileCards';

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => (
  <div className="login-form-container">
    <Box component="form" onSubmit={handleSubmit} className="login-form">
      <Typography variant="h4" component="h2" gutterBottom>
        Login
      </Typography>
      <div className="form-group">
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  </div>
);

const Login = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        // Redirect to verify email page if not verified
        navigate('/verify-email');
        return;
      }

      // Fetch user profile from Firestore
      const userProfileRef = doc(db, 'users', user.uid);
      const userProfileDoc = await getDoc(userProfileRef);

      if (userProfileDoc.exists()) {
        const userProfile = userProfileDoc.data();

        // Check if the user profile is complete
        if (userProfile.name || userProfile.gender || userProfile.yearOfStudy || userProfile.phoneNumber || userProfile.age) {
             navigate('/feedcard');

        } else {
          // navigate('/createprofile'); 
          console.log("inelse");

        }
      } else {
        // navigate('/feedcard');
        console.log("outelse");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Link to='/'><button>Home</button></Link>
      {!user ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <FeedProfileCards/>
      )}
    </div>
  );
};

export default Login;
