import { IQuestionSet } from "./questionSet";

/**
 * Optimal solution with Time complexity O(m+n) and space O(1) where
 * 	m and n are the size of each array.
 */
export function FindIntersaction(
	strArr: IQuestionSet["input"],
): false | string {
	// Check empty string
	if (strArr[0].length === 0 || strArr[1].length === 0) {
		return false;
	}

	// Initiate parameters
	const input1 = strArr[0].split(", ");
	const input2 = strArr[1].split(", ");
	let pointer1 = 0;
	let pointer2 = 0;
	const output: number[] = [];

	// Loop all over arrays until either pointer breach limit
	while (pointer1 < input1.length && pointer2 < input2.length) {
		const num1 = +input1[pointer1];
		const num2 = +input2[pointer2];

		if (num1 === num2) {
			output.push(num1);
			pointer1++;
			pointer2++;
		} else if (num1 < num2) {
			pointer1++;
		} else {
			pointer2++;
		}
	}

	return output.length === 0 ? false : output.join(",");
}

