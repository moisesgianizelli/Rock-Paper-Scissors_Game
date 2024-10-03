import React, { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import Choices from "./Choices";
import Buttons from "./Buttons";
import Result from "./Result";
import ResetButton from "./ResetButton";

const GameOverPopup = ({ winner, reset, onSignOut }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Game Over</h2>
        <p>{winner} wins!</p>
        <button onClick={reset} className="button">
          Play Again
        </button>
        <button onClick={onSignOut} className="button">
          Exit
        </button>
      </div>
    </div>
  );
};

const Game = ({ user, onSignOut }) => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Who wins");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

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
    setUserPoints(0);
    setComputerPoints(0);
    setUserChoice("rock");
    setComputerChoice("rock");
    setTurnResult(null);
    setResult("Who wins");
    setGameOver(false);
    setWinner(null);
  };

  useEffect(() => {
    if (!gameOver) {
      const roundResult = resultsMap[userChoice][computerChoice];
      setTurnResult(roundResult);

      if (roundResult.includes("User got the point")) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        if (updatedUserPoints === 10) {
          setGameOver(true);
          setResult("User wins");
          setWinner("User");
        }
      } else if (roundResult.includes("Computer got the point")) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        if (updatedComputerPoints === 10) {
          setGameOver(true);
          setResult("Computer wins");
          setWinner("Computer");
        }
      }
    }
  }, [userChoice, computerChoice, gameOver]);

  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors</h1>
      <h2>Welcome, {user}!</h2>
      <ScoreBoard userPoints={userPoints} computerPoints={computerPoints} />

      <div className="versus-container">
        <div className="player-box">
          <h3>{user}</h3>
          <img
            className="user-hand"
            src={`../images/${userChoice}.jpeg`}
            alt={`User choice: ${userChoice}`}
          />
        </div>

        <div className="versus">
          <h2>X</h2>
        </div>

        <div className="computer-box">
          <h3>Computer</h3>
          <img
            className="computer-hand"
            src={`../images/${computerChoice}.jpeg`}
            alt={`Computer choice: ${computerChoice}`}
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>

      <Buttons choices={choices} handleOnClick={handleOnClick} />
      <Result turnResult={turnResult} result={result} />

      {gameOver && (
        <GameOverPopup winner={winner} reset={reset} onSignOut={onSignOut} />
      )}

      <button onClick={onSignOut} className="button">
        Logout
      </button>
    </div>
  );
};

export default Game;
