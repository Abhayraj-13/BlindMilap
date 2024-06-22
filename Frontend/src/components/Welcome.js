// import React, { useState } from "react";
// import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
// import { auth } from "../firebase";
// import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// import CreateProfile from "./CreateProfile/CreateProfile";
// import { useAuthState } from "react-firebase-hooks/auth";
// // import Welcome from "./Welcome";

// const Welcome = () => {
//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithRedirect(auth, provider);
   
// };
//   return (
//     <main className="welcome">
//       <h2>Welcome to React Chat.</h2>
//       <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
//       <p>Sign in with Google to chat with with your fellow React Developers.</p>
//       <button className="sign-in">
//         <img
//           onClick={()=>{googleSignIn();<CreateProfile/>}}
//           src={GoogleSignin}
//           alt="sign in with google"
//           type="button"
//         />
//       </button>
//     </main>
//   );
// };

// export default Welcome;



import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import SignUpForm from "./sign_up/sign-up";
import LandingPage from "./LandingPage/Landingpage";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import CreateProfile from "./CreateProfile/CreateProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login/login";
// import Welcome from "./Welcome";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
   
};
  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <LandingPage />
      {/* <Login/> */}
      {/* <SignUpForm /> */}
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={()=>{googleSignIn();<CreateProfile/>}}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
