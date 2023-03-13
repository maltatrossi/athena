import React, { useState } from 'react';
import { Dice } from './components/Dice';
import { RollButton } from './components/RollButton';
import './App.css';

function App() {
  const [diceRolls, setDiceRolls] = useState([1, 1, 1, 1, 1]);

  const rollDice = () => {
    const randomDiceRoll = () => {
      return Math.floor(Math.random() * 6) + 1;
    };
    setDiceRolls(Array.from({ length: 5 }, randomDiceRoll));
  };

  return (
    <div className="container">
      <Dice diceRolls={diceRolls} />
      <RollButton onClick={rollDice} />
    </div>
  );
}

export default App;
