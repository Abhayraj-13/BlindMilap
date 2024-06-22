// import "./App.css";
// import NavBar from "./components/NavBar";
// import ChatBox from "./components/ChatBox";
// import Welcome from "./components/Welcome";
// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import CreateProfile from "./components/CreateProfile/CreateProfile";
// import LoginPage from "./components/Login/login";
// import AvatarComponent from "./components/AvatarComponent/AvatarComponent";
// import FeedNavbar from "./components/FeedPage/FeedNavbar/FeedNavbar";

// import LandingPage from "./components/LandingPage/Landingpage";
// import {BrowserRouter,Routes,Route} from 'react-router-dom'



// function App() {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       {/* <LandingPage/> */}
//        <NavBar />

//       {!user ? (
//         <Welcome />  
//       ) : (
//         <>
//         <CreateProfile/>
//         </>
//       )} 


//       <BrowserRouter>
//       <Routes>
//       {/* <Route path='/homepage' element={<Welcome/>}/> */}
//       <Route path='/login' element={<LoginPage/>}/>
//       <Route path='/createprofile' element={<CreateProfile/>}/>
//       <Route path='/chatbox' element={<ChatBox/>}/>
//       <Route path='/avatar' element={<AvatarComponent/>}/>
//       <Route path='/feednavbar' element={<FeedNavbar/>}/> 
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import LoginPage from "./components/Login/login";
import AvatarComponent from "./components/AvatarComponent/AvatarComponent";
import FeedNavbar from "./components/FeedPage/FeedNavbar/FeedNavbar";
// import LandingPage from "./components/LandingPage/LandingPage";
import VerifyEmail from "./components/VerifyEmail";
import SignUpForm from "./components/sign_up/sign-up";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate here
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import FeedProfileCards from "./components/FeedPage/FeedProfileCards/FeedProfileCards";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/createprofile" /> : <Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          <Route path="/createprofile" element={<ProtectedRoute><CreateProfile /></ProtectedRoute>} />
          <Route path="/chatbox" element={<ProtectedRoute><ChatBox /></ProtectedRoute>} />
          <Route path="/avatar" element={<ProtectedRoute><AvatarComponent /></ProtectedRoute>} />
          <Route path="/feednavbar" element={<ProtectedRoute><FeedNavbar /></ProtectedRoute>} />
          <Route path="/feedcard" element={<ProtectedRoute><FeedProfileCards /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

