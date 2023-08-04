import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess/Guess';

function GuessResults({guessResults}) {
  return (<>
  {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guessResults[num]} />
      ))}
  </>)
}

export default GuessResults;
