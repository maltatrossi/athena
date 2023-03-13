import React from 'react';

interface Props {
  diceRolls: number[];
}

const Dice: React.FC<Props> = ({ diceRolls }) => {
  return (
    <div className="dice-container">
      {diceRolls.map((roll, index) => (
        <img
          key={index}
          src={`./images/dice${roll}.png`}
          alt={`Dice ${roll}`}
          className="dice-image"
        />
      ))}
    </div>
  );
};

export default Dice;
