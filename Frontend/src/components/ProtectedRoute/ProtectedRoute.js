

import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

const ProtectedRoute = ({ children, requireVerified, requireProfile }) => {
  const [user] = useAuthState(auth);
  const [isVerified, setIsVerified] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkVerificationAndProfile = async () => {
      if (user) {
        await user.reload(); // Reload user data to get the most up-to-date information
        setIsVerified(user.emailVerified);

        const userProfileRef = doc(db, 'users', user.uid);
        const userProfileDoc = await getDoc(userProfileRef);

        if (userProfileDoc.exists()) {
          const userProfile = userProfileDoc.data();
          setProfileComplete(userProfile.name && userProfile.gender && userProfile.yearOfStudy && userProfile.phoneNumber && userProfile.age);
        } else {
          setProfileComplete(false);
        }
      }
      setLoading(false);
    };

    checkVerificationAndProfile();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requireVerified && !isVerified) {
    return <Navigate to="/verify-email" />;
  }


  return children;
};

export default ProtectedRoute;
