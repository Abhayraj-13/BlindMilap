

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import NavBar from '../NavBar';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Login.css';

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
      console.log(userProfileDoc);
      if (userProfileDoc.exists()) {
        const userProfile = userProfileDoc.data();
        console.log(userProfile);

        // Check if the user profile is complete
        if (userProfile.name && userProfile.gender && userProfile.yearOfStudy && userProfile.phoneNumber && userProfile.age) {
          navigate('/feedcard');
        } else {
          navigate('/feedcard');
        }
      } else {
        navigate('/feedcard');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Link to='/home'><button>Home</button></Link>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;

