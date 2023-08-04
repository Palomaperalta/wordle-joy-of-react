import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from './../GuessInput/GuessInput';
import GuessResults from './../GuessResults/GuessResults';

// Pick a random word on every pageload
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([])
  const answer = 'HELLO'

  

  return (
  <>
    <GuessInput disabled={guessResults.length === 6 || guessResults[guessResults.length-1] === answer} setGuessResults={setGuessResults} />
    <GuessResults guessResults={guessResults}/>
    {guessResults[guessResults.length-1] === answer && 
            <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {guessResults.length} guesses</strong>.
              </p>
            </div>
    }
    {guessResults.length === 6 && guessResults[guessResults.length-1] !== answer &&
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>HELLO</strong>.</p>
          </div>}

  </>
  )
}

export default Game;
