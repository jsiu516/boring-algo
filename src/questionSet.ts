import * as random from "random";

export interface IQuestionSet {
	input: [string, string];
	output: string | false;
}

export const DEFAULT_QUESTION_SET: IQuestionSet[] = [
	{
		input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"],
		output: "1,4,13",
	},
	{
		input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"],
		output: "1,9,10",
	},
];

export const CUSTOM_QUESTION_SET: IQuestionSet[] = [
	{
		input: ["", ""],
		output: false,
	},
	{
		input: ["1", ""],
		output: false,
	},
	{
		input: ["1, 1", "1, 1, 1"],
		output: "1,1",
	},
	{
		input: ["1, 1, 1, 1, 1, 1", "1, 1, 1, 1"],
		output: "1,1,1,1",
	},
];

const generateSortedRandomArray = (length = random.int(1, 10000)): number[] => {
	const array: number[] = [];
	for (let i = 0; i < length; i++) {
		array.push(random.int(1, Math.floor(length * 1.5)));
	}
	return array.sort((a, b) => a - b);
};

const getValidIntersection = (input1: number[], input2: number[]): number[] => {
	const array: number[] = [];
	const map = new Map<number, number>();
	for (const n of input1) {
		let count = map.get(n) || 0;
		map.set(n, ++count);
	}
	for (const n of input2) {
		if (map.has(n) && map.get(n) > 0) {
			array.push(n);
			let count = map.get(n);
			map.set(n, --count);
		}
	}
	return array;
};
export const RANDOM_QUESTION_SET = (totalCount: number): IQuestionSet[] => {
	const questionSet: IQuestionSet[] = [];
	for (let i = 0; i < totalCount; i++) {
		const array1 = generateSortedRandomArray();
		const array2 = generateSortedRandomArray();
		const validIntersection = getValidIntersection(array1, array2);
		questionSet.push({
			input: [array1.join(", "), array2.join(", ")],
			output:
				validIntersection.length === 0
					? false
					: validIntersection.join(","),
		});
	}
	return questionSet;
};
