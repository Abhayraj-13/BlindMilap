import React, { useState } from 'react';
import './LoginPage.css';
import NavBar from '../NavBar';
import ChatBox from '../ChatBox';
// import CreateProfile from '../CreateProfile/CreateProfile';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


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

const App = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email/password login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ChatBox />
      )}
    </div>
  );
};

export default App;
