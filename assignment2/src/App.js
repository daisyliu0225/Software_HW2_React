import './App.css';
import Login from "./components/login";
import { auth } from "./firebaseSettings";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from './components/navBar';
import LeftPanel from './components/leftPanel';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
        <NavBar />
        <LeftPanel/>
        </>
      )}
    </div>
  );
}

export default App;
