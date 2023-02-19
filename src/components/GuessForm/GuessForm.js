import React from "react";

function GuessForm({ gameStatus, handleAddGuess }) {
	const [input, setInput] = React.useState('');

	function handleSubmit(e) {
		e.preventDefault();
		handleAddGuess(input);
		setInput('');
	}

  return (
		<form onSubmit={handleSubmit} className="guess-input-wrapper">
			<label htmlFor="guess-input">Enter guess:</label>
			<input disabled={gameStatus !== 'running'} autoComplete="off" id="guess-input" pattern="[A-Z]{5}" required={true} title="5 letter word" type="text" value={input} onChange={(e) => setInput(e.target.value.toUpperCase())}/>
		</form>
	);
}

export default GuessForm;
