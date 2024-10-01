const ScoreBoard = ({ userPoints, computerPoints }) => {
  return (
    <div className="score">
      <h1>User Points: {userPoints}</h1>
      <h1>Computer Points: {computerPoints}</h1>
    </div>
  );
};
export default ScoreBoard;
