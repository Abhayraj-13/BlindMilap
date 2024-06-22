import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkVerification = async () => {
      if (user) {
        await user.reload(); // Reload user data to get the most up-to-date information
        setIsVerified(user.emailVerified);
      }
      setLoading(false);
    };
    checkVerification();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!isVerified) {
    return <Navigate to="/verify-email" />;
  }

  return children;
};

export default ProtectedRoute;


