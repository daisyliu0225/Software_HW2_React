import './css/App.css';
import './css/chatBox.css'
import './css/chatRooms.css'
import './css/addUser.css'
import Login from "./components/login";
import { auth } from "./firebaseSettings";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./components/chatBox"

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
        <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
