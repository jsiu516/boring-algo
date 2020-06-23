import { FindIntersaction } from "./solution";
import {
	DEFAULT_QUESTION_SET,
	CUSTOM_QUESTION_SET,
	RANDOM_QUESTION_SET,
} from "./questionSet";
import { IQuestionSet } from "./questionSet";

const validate = (questionSet: IQuestionSet[]) => {
	for (const question of questionSet) {
		const solution = FindIntersaction(question.input);
		if (solution !== question.output) {
			throw new Error(
				`- Wrong Answer on ${JSON.stringify(question)} vs ${solution}`,
			);
		}
	}
};

const main = () => {
	try {
		validate(DEFAULT_QUESTION_SET);
        validate(CUSTOM_QUESTION_SET);
        validate(RANDOM_QUESTION_SET(500));
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

main();
