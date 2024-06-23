



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
import VerifyEmail from "./components/VerifyEmail";
import SignUpForm from "./components/sign_up/sign-up";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import FeedProfileCards from "./components/FeedPage/FeedProfileCards/FeedProfileCards";
import LandingPage from "./components/LandingPage/Landingpage";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/createprofile" /> : <Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/createprofile" element={<ProtectedRoute requireVerified={true}><CreateProfile /></ProtectedRoute>} />
          <Route path="/chatbox" element={<ProtectedRoute requireVerified={true} requireProfile={true}><ChatBox /></ProtectedRoute>} />
          <Route path="/avatar" element={<ProtectedRoute requireVerified={true} requireProfile={true}><AvatarComponent /></ProtectedRoute>} />
          <Route path="/feednavbar" element={<ProtectedRoute requireVerified={true} requireProfile={true}><FeedNavbar /></ProtectedRoute>} />
          <Route path="/feedcard" element={<ProtectedRoute requireVerified={true} requireProfile={true}><FeedProfileCards /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
