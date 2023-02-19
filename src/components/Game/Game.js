import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	// running, lost, win
	const [gameStatus, setGameStatus] = React.useState('running');

	function handleAddGuess(guess) {
		if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
			return;
		}

		const newGuesses = [...guesses, guess];
		setGuesses(newGuesses);

		if (guess === answer) {
			setGameStatus('win');
		} else if (guess !== answer && newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}

  return (
		<>
			<GuessResults guesses={guesses} answer={answer} />

			<GuessForm gameStatus={gameStatus} handleAddGuess={handleAddGuess} />

			{gameStatus === 'win' && (
				<WonBanner numOfGuesses={guesses.length} />
			)}

			{gameStatus === 'lost' && (
					<LostBanner answer={answer} />
			)}
		</>
	);
}

export default Game;
