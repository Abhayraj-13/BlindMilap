import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import LoginPage from "./components/Login/login";



function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
                 <LoginPage/>   //<CreateProfile/>
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
