const ResetButton = ({ gameOver, reset }) => {
  return (
    <div className="button-div">
      {gameOver && (
        <button className="button" onClick={reset}>
          Restart Game?
        </button>
      )}
    </div>
  );
};
export default ResetButton;
