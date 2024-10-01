import React, { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import Choices from "./Choices";
import Buttons from "./Buttons";
import Result from "./Result";
import ResetButton from "./ResetButton";

const Game = ({ user, onSignOut }) => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Who wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const resultsMap = {
    rock: {
      rock: "No one got the point",
      paper: "Computer got the point",
      scissors: "User got the point",
    },
    paper: {
      rock: "User got the point",
      paper: "No one got the point",
      scissors: "Computer got the point",
    },
    scissors: {
      rock: "Computer got the point",
      paper: "User got the point",
      scissors: "No one got the point",
    },
  };

  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    // Resetar os pontos e estados para o início do jogo
    setUserPoints(0);
    setComputerPoints(0);
    setUserChoice("rock");
    setComputerChoice("rock");
    setTurnResult(null);
    setResult("Who wins");
    setGameOver(false);
  };

  useEffect(() => {
    // Verifica a pontuação e atualiza o resultado
    if (userPoints < 10 && computerPoints < 10) {
      const roundResult = resultsMap[userChoice][computerChoice];
      setTurnResult(roundResult);

      if (roundResult.includes("User got the point")) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        if (updatedUserPoints === 10) {
          setGameOver(true);
          setResult("User wins");
        }
      } else if (roundResult.includes("Computer got the point")) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        if (updatedComputerPoints === 10) {
          setGameOver(true);
          setResult("Computer wins");
        }
      }
    } else if (userPoints === 10 && computerPoints === 10) {
      // Lógica para jogar novamente em caso de empate
      setResult("It's a tie! Play again.");
      reset(); // Reseta o jogo após o empate para permitir nova partida
    }
  }, [userChoice, computerChoice]); // Mantivemos userPoints e computerPoints como dependências

  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors</h1>
      <h2>Welcome, {user}!</h2>
      <ScoreBoard userPoints={userPoints} computerPoints={computerPoints} />
      <div className="choices">
        <div className="choice-user">
          <img
            className="user-hand"
            src={`../images/${userChoice}.jpeg`}
            alt={`User choice: ${userChoice}`}
          />
        </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={`../images/${computerChoice}.jpeg`}
            alt={`Computer choice: ${computerChoice}`}
          />
        </div>
      </div>
      <Buttons choices={choices} handleOnClick={handleOnClick} />
      <Result turnResult={turnResult} result={result} />
      <ResetButton gameOver={gameOver} reset={reset} />
      <button onClick={onSignOut} className="button">
        Logout
      </button>
    </div>
  );
};

export default Game;
