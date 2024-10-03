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

export default GameOverPopup;
