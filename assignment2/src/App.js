import './App.css';
import Login from "./components/login";
import {useState} from "react";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
        </>
      )}
    </div>
  );
}

export default App;
