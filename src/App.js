import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Game from "./components/Game"; // Importa o componente Game

function App() {
  const [user, setUser] = useState(null);

  const handleSignUp = (username) => {
    setUser(username); // Atualiza o estado do usuário
  };

  const handleSignIn = (username) => {
    setUser(username); // Atualiza o estado do usuário
  };

  const handleSignOut = () => {
    setUser(null); // Limpa o estado do usuário
  };

  return (
    <div className="App">
      {!user ? (
        <>
          <SignUp onSignUp={handleSignUp} />
          <SignIn onSignIn={handleSignIn} />
        </>
      ) : (
        <Game user={user} onSignOut={handleSignOut} /> // Passa o usuário autenticado para o jogo
      )}
    </div>
  );
}

export default App;
