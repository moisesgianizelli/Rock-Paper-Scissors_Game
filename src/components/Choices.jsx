import React from "react";

const Choices = ({ userChoice, computerChoice }) => {
  return (
    <div className="choices">
      <div className="choice-user">
        <img
          className="user-hand"
          src={`../images/${userChoice}.jpeg`}
          alt="User choice"
        />
      </div>
      <div className="choice-computer">
        <img
          className="computer-hand"
          src={`../images/${computerChoice}.jpeg`}
          alt="Computer choice"
        />
      </div>
    </div>
  );
};

export default Choices;
