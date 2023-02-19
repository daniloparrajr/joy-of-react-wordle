import React from "react";

import {NUM_OF_GUESS_LENGTH} from "../../constants";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Cell({letter, status}) {
	const classNames = status ? `cell ${status}` : 'cell';

	return (
		<span
			className={classNames}>
			{letter}
		</span>
	);
}

function Guess({value = '', answer}) {
	let result = checkGuess(value, answer);

	return (
		<p className="guess">
			{range(NUM_OF_GUESS_LENGTH).map((num) => (
				<Cell
					key={num}
					letter={result ? result[num].letter : undefined}
					status={result ? result[num].status : undefined}
				/>
			))}
		</p>
	);
}

export default Guess;
