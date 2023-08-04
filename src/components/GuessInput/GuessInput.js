import React from "react";


function GuessInput({setGuessResults, disabled}) {
  const [guessInput, setGuessInput] = React.useState("")

  function handleSubmit(event){
    event.preventDefault()
    setGuessResults(prevState => [...prevState, guessInput])
    console.log({guessInput})
    setGuessInput("")
  }
  function handleButton(){
    setGuessResults("")
  }
  return (
    
  <div>
    <form className="guess-input-wrapper"
          onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
            type="text"
            value={guessInput}
            onChange={event =>{
              setGuessInput(event.target.value.toUpperCase())
            }} 
            required
            minLength={5}
            maxLength={5}
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
            disabled={disabled}
        />
    </form>
    <button className={'button'} onClick={handleButton}>
      RESET
    </button>
  </div>
  )
}

export default GuessInput;
