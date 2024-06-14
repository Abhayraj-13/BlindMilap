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

import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />

      {!user ? (
        <Welcome />  
      ) : (
        <>
        <CreateProfile/> 
        </>
      )}


      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/createprofile' element={<CreateProfile/>}/>
      <Route path='/chatbox' element={<ChatBox/>}/>
      <Route path='/avatar' element={<AvatarComponent/>}/>
      <Route path='/feednavbar' element={<FeedNavbar/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
