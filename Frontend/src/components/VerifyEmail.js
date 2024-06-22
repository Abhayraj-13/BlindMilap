

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.reload().then(() => {
          if (user.emailVerified) {
            setIsVerified(true);
            navigate('/createprofile');
          }
        });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleResendVerificationEmail = async () => {
    if (auth.currentUser) {
      try {
        await sendEmailVerification(auth.currentUser);
        alert('Verification email sent!');
      } catch (error) {
        console.error('Error sending verification email:', error);
      }
    }
  };

  return (
    <div>
      <h2>Verify Your Email</h2>
      <p>A verification link has been sent to your email. Please check your email and click the link to verify your account. Once verified, you can log in.</p>
      <button onClick={handleResendVerificationEmail}>Resend Verification Email</button>
      <p>If you have verified your email, please refresh the page or log in again.</p>
    </div>
  );
};

export default VerifyEmail;
