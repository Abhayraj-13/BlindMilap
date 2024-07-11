

// import React, { useState } from 'react';
// import './sign-up.css';
// import { auth } from '../../firebase';
// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const SignUpForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Send verification email
//       await sendEmailVerification(user);

//       setIsLoading(false);
//       // Redirect to verify email page
//       navigate('/verify-email');
//     } catch (error) {
//       setError(error.message);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp} className="signup-form">
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             className="form-control"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="text-danger">{error}</p>}
//         <button type="submit" className="btn btn-primary" disabled={isLoading}>
//           {isLoading ? 'Signing Up...' : 'Sign Up with Email'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;

import axios from 'axios';
import React, { useState } from 'react';
import './sign-up.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  


  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Send verification email
      await sendEmailVerification(user);
      console.log(user.uid, user.email, name);
      
  
      setIsLoading(false);
      // Redirect to verify email page
      navigate('/verify-email');
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up with Email'}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;