import React from 'react';
import { Howl } from 'howler';

const DiceRollAudio = ({ src }) => {
  const sound = new Howl({
    src,
  });

  return (
    <button
      onClick={() => {
        sound.play();
      }}
      style={{ display: 'none' }}
    />
  );
};

const RollButtonHoverAudio = ({ src }) => {
  const sound = new Howl({
    src,
  });

  return (
    <button
      onMouseEnter={() => {
        sound.play();
      }}
      style={{ display: 'none' }}
    />
  );
};

export { DiceRollAudio, RollButtonHoverAudio };
