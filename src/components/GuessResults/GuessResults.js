import React from "react";

import {range} from "../../utils";

import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
		<>
			<div className="guess-results">
				{range(NUM_OF_GUESSES_ALLOWED).map(index => {
					const userGuess = guesses[index];
					let guess = '';

					if (userGuess) {
						guess = userGuess;
					}

					return (
						<Guess key={index} value={guess} answer={answer} />
					);
				})}
			</div>
		</>
	);
}

export default GuessResults;
