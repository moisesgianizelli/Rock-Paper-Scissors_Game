import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleSignUp = (username) => {
    setUser(username);
  };

  const handleSignIn = (username) => {
    setUser(username);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {!user ? (
        <>
          {/* <SignUp onSignUp={handleSignUp} /> */}
          <SignIn onSignIn={handleSignIn} />
        </>
      ) : (
        <Game user={user} onSignOut={handleSignOut} />
      )}
    </div>
  );
}

export default App;
