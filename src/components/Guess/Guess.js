import React from "react";
import { range } from '../../utils';
import {checkGuess} from '../../game-helpers'


function Guess({ value }) {
  const answer = 'HELLO'
  const correctGuess = checkGuess(value, answer)
  console.log(correctGuess, value)
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${correctGuess && correctGuess[num].status}`}>
            {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}






export default Guess;