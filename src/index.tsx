import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Howl } from 'howler';

import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';

import stonePushSound from './audio/stonepush.wav';
import diceRollSound from './audio/diceroll.wav';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice: React.FC<{ diceRolls: number[] }> = ({ diceRolls }) => {
  return (
    <div className="dice-container">
      {diceRolls.map((roll, index) => (
        <img
          key={index}
          src={diceImages[roll - 1]}
          alt={`Dice ${roll}`}
          className="dice-image"
        />
      ))}
    </div>
  );
};

const RollButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const pushSound = new Howl({
    src: [stonePushSound]
  });

  const rollSound = new Howl({
    src: [diceRollSound]
  });

  const handleHover = () => {
    pushSound.play();
  };

  const handleClick = () => {
    rollSound.play();
    onClick();
  };

  return (
    <div className="roll-button-container">
      <button
        className="roll-button"
        onMouseEnter={handleHover}
        onClick={handleClick}
      >
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [diceRolls, setDiceRolls] = useState([1, 1, 1, 1, 1]);

  const rollDice = () => {
    const randomDiceRoll = () => {
      return Math.floor(Math.random() * 6) + 1;
    };

    setDiceRolls(Array.from({ length: 5 }, randomDiceRoll));
  };

  const getHand = (diceRolls: number[]) => {
    const rollCounts: number[] = Array(7).fill(0);

    for (let roll of diceRolls) {
      rollCounts[roll]++;
    }

    const counts = rollCounts.slice(1);

    if (counts.includes(5)) {
      return 'Five of a kind!';
    } else if (counts.includes(4)) {
      return 'Four of a kind!';
    } else if (counts.includes(3) && counts.includes(2)) {
      return 'Full house!';
    } else if (counts.includes(3)) {
      return 'Three of a kind!';
    } else if (counts.filter(count => count === 2).length === 2) {
      return 'Two pairs!';
    } else if (counts.includes(2)) {
      return 'Pair!';
    } else {
      return 'Nothing!';
    }
  };

  return (
    <div className="container">
      <div className="dice-container">
        <Dice diceRolls={diceRolls} />
        <h2 className="hand-value">{getHand(diceRolls)}</h2>
      </div>
      <RollButton onClick={rollDice} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
