import './App.css';
import Login from "./components/login";
import { auth } from "./firebaseSettings";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from './components/chat';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
        <Chat />
        </>
      )}
    </div>
  );
}

export default App;
