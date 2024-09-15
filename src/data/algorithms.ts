export const algorithms = {
	'Array/String': [
		{
			id: 1,
			title: 'Two Pointers',
			description:
				'The Two Pointers pattern uses two pointers to iterate through the data structure in tandem until one or both of the pointers hit a certain condition.',
			category: 'Array/String',
			useCases:
				'Useful for searching pairs in a sorted array or linked list, comparing strings, or removing duplicates from sorted arrays.',
			timeComplexity: 'Usually O(n) where n is the number of elements in the array',
			spaceComplexity: 'Usually O(1) as it only uses a constant amount of extra space',
			commonProblems: [
				'Reverse a string',
				'Find a pair with a given sum in a sorted array',
				'Remove duplicates from a sorted array',
				'Squaring a sorted array',
				'Dutch National Flag problem',
			],
			examples: [
				{
					title: 'Reverse String',
					description: 'Write a function that reverses a string.',
					input: 'hello',
					output: 'olleh',
					explanation:
						'Use two pointers, one at the start and one at the end, swap characters until pointers meet.',
				},
				{
					title: 'Find Pair with Target Sum',
					description:
						'Given a sorted array and a target sum, find a pair in the array whose sum is equal to the given target.',
					input: 'Array: [1, 2, 3, 4, 6], Target: 6',
					output: '[1, 3]',
					explanation:
						'Use two pointers, one at the start and one at the end, move them based on the sum until the target is found.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize pointers',
					explanation:
						'Set left pointer to the start (index 0) and right pointer to the end (index 7) of the array.',
				},
				{
					description: 'Compare elements',
					explanation: 'Compare elements at left and right pointers.',
				},
				{
					description: 'Move pointers',
					explanation:
						'Move left pointer right if the left element is smaller than the right element.',
				},
				{ description: 'Compare again', explanation: 'Compare new left with right.' },
				{
					description: 'Continue process',
					explanation:
						'Keep moving pointers and comparing until they meet or find the desired condition.',
				},
			],
		},
		{
			id: 2,
			title: 'Sliding Window',
			description:
				'The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s.',
			category: 'Array/String',
			useCases:
				'Useful for problems dealing with contiguous subarrays or sublists, such as finding the longest substring with k distinct characters.',
			timeComplexity: 'Usually O(n) where n is the number of elements in the array',
			spaceComplexity:
				'Usually O(1) for fixed-size windows, can be O(k) for dynamic windows where k is the window size',
			commonProblems: [
				"Maximum sum subarray of size 'K'",
				"Longest substring with 'K' distinct characters",
				'String anagrams',
				'Smallest subarray with a given sum',
			],
			examples: [
				{
					title: 'Maximum Sum Subarray of Size K',
					description: 'Find the maximum sum of any contiguous subarray of size k.',
					input: 'Array: [2, 1, 5, 1, 3, 2], k = 3',
					output: '9',
					explanation:
						'Slide a window of size k through the array, keeping track of the maximum sum encountered.',
				},
				{
					title: 'Longest Substring with K Distinct Characters',
					description:
						'Find the length of the longest substring with no more than K distinct characters.',
					input: "String: 'araaci', K = 2",
					output: '4',
					explanation: "The longest substring with no more than 2 distinct characters is 'araa'.",
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize window',
					explanation: 'Set the start of the window to index 0.',
				},
				{
					description: 'Expand window',
					explanation: 'Move the end of the window to the right, adding elements to the window.',
				},
				{
					description: 'Process window',
					explanation:
						'Perform the required operation on the current window (e.g., calculate sum, count distinct characters).',
				},
				{
					description: 'Shrink window',
					explanation:
						'If the window size exceeds K or violates a condition, move the start of the window to the right.',
				},
				{
					description: 'Repeat',
					explanation:
						'Continue expanding and shrinking the window until the end of the array is reached.',
				},
			],
		},
	],
	'Linked List': [
		{ id: 4, title: 'Fast and Slow Pointers' },
		{ id: 5, title: 'In-place Reversal of a LinkedList' },
	],
	Tree: [
		{ id: 6, title: 'Tree Breadth First Search' },
		{ id: 7, title: 'Tree Depth First Search' },
	],
	Graph: [
		{ id: 8, title: 'Graph Breadth First Search' },
		{ id: 9, title: 'Graph Depth First Search' },
		{ id: 10, title: 'Topological Sort' },
	],
	'Dynamic Programming': [
		{ id: 11, title: '0/1 Knapsack' },
		{ id: 12, title: 'Unbounded Knapsack' },
		{ id: 13, title: 'Fibonacci Numbers' },
	],
	Miscellaneous: [
		{ id: 14, title: 'Cyclic Sort' },
		{ id: 15, title: "Top 'K' Elements" },
		{ id: 16, title: 'K-way merge' },
		{ id: 17, title: 'Modified Binary Search' },
		{ id: 18, title: 'Bitwise XOR' },
	],
}

export const patternExamples = {
	'Two Pointers': [
		{
			title: 'Reverse String',
			description: 'Write a function that reverses a string.',
			input: 'hello',
			output: 'olleh',
			explanation:
				'Use two pointers, one at the start and one at the end, swap characters until pointers meet.',
		},
		{
			title: 'Find Pair with Target Sum',
			description:
				'Given a sorted array and a target sum, find a pair in the array whose sum is equal to the given target.',
			input: 'Array: [1, 2, 3, 4, 6], Target: 6',
			output: '[1, 3]',
			explanation:
				'Use two pointers, one at the start and one at the end, move them based on the sum until the target is found.',
		},
	],
	'Sliding Window': [
		{
			title: 'Maximum Sum Subarray of Size K',
			description: 'Find the maximum sum of any contiguous subarray of size k.',
			input: 'Array: [2, 1, 5, 1, 3, 2], k = 3',
			output: '9',
			explanation:
				'Slide a window of size k through the array, keeping track of the maximum sum encountered.',
		},
	],
}
