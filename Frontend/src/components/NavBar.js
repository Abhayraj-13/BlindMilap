import React, { useState } from "react";
import { auth, GoogleAuthProvider, signOut } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import SignUpForm from "./sign_up/sign-up";
import VerifyEmail from "./VerifyEmail";
import { signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const [showSignUpOptions, setShowSignUpOptions] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleSignUpEmail = () => {
    setShowSignUpForm(true);
    setShowSignUpOptions(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };

  const handleVerificationComplete = () => {
    setVerificationEmailSent(false);
    setShowSignUpForm(false);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-buttons">
          {user ? (
            <button className="btn" onClick={handleSignOut}>
              Log Out
            </button>
          ) : (
            <>
              <button className="btn" onClick={handleSignUpClick}>
                Sign Up
              </button>
              <button className="btn">Login</button>
            </>
          )}
        </div>
      </div>
      {showSignUpOptions && (
        <div className="signup-options">
          <button className="btn">
            <img
              onClick={googleSignIn}
              src={GoogleSignin}
              alt="sign in with google"
              type="button"
            />
          </button>
          <button className="btn" onClick={handleSignUpEmail}>
            Sign Up with Email
          </button>
        </div>
      )}
      {showSignUpForm && !user && !verificationEmailSent && (
        <SignUpForm setVerificationEmailSent={setVerificationEmailSent} />
      )}
      {verificationEmailSent && !user && (
        <VerifyEmail onVerificationComplete={handleVerificationComplete} />
      )}
    </div>
  );
};

export default NavBar;
