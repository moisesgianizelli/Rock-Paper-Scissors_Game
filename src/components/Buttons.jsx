const Buttons = ({ choices, handleOnClick }) => {
  return (
    <div className="button-div">
      {choices.map((choice, index) => (
        <button
          className="btn btn-secondary m-2" // Adicione estilos do Bootstrap
          key={index}
          onClick={() => handleOnClick(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
