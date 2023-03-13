import React from 'react';

interface Props {
  onClick: () => void;
}

const RollButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="roll-button-container">
      <button className="roll-button" onClick={onClick}>
        Roll Dice
      </button>
    </div>
  );
};

export default RollButton;
