export const algorithms: Algorithms = {
	'Array/String': [
		{
			id: crypto.randomUUID(),
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
			id: crypto.randomUUID(),
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
		{
			id: crypto.randomUUID(),
			title: 'Fast and Slow Pointers',
			description:
				'This pattern involves using two pointers, one moving faster than the other, to detect cycles in a linked list, find the middle element, or identify other interesting characteristics.',
			category: 'Linked List',
			useCases:
				'Useful for detecting cycles in linked lists, finding the middle of a linked list, or checking if a linked list is a palindrome.',
			timeComplexity: 'O(n) where n is the number of nodes in the linked list',
			spaceComplexity: 'O(1) since it uses only a few extra pointers',
			commonProblems: [
				'Detect a cycle in a linked list',
				'Find the middle of a linked list',
				'Check if a linked list is a palindrome',
			],
			examples: [
				{
					title: 'Cycle Detection',
					description: 'Given a linked list, detect if it has a cycle.',
					input: '[1 -> 2 -> 3 -> 4 -> 5 -> 2 (cycle)]',
					output: 'True',
					explanation: 'Use fast and slow pointers to detect if the pointers meet inside a cycle.',
				},
				{
					title: 'Find Middle Node',
					description: 'Find the middle of a singly linked list.',
					input: '[1 -> 2 -> 3 -> 4 -> 5]',
					output: '3',
					explanation:
						'Use fast and slow pointers, where the fast pointer moves twice as fast as the slow pointer.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize fast and slow pointers',
					explanation: 'Set both pointers to the head of the linked list.',
				},
				{
					description: 'Move fast and slow pointers',
					explanation:
						'Move the slow pointer by one step and the fast pointer by two steps until the fast pointer reaches the end or a cycle is detected.',
				},
				{
					description: 'Check for cycle',
					explanation:
						'If the fast pointer meets the slow pointer, a cycle exists. Otherwise, no cycle.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: 'In-place Reversal of a LinkedList',
			description:
				'This pattern allows the reversal of a linked list without using extra space for storing nodes. The pointers in the original list are updated to reverse the order.',
			category: 'Linked List',
			useCases:
				'Useful for problems where you need to reverse a part or the entirety of a linked list in place.',
			timeComplexity: 'O(n) where n is the number of nodes in the linked list',
			spaceComplexity: 'O(1) since the reversal is done in place',
			commonProblems: ['Reverse an entire linked list', 'Reverse a sublist of a linked list'],
			examples: [
				{
					title: 'Reverse Entire List',
					description: 'Given a linked list, reverse it.',
					input: '[1 -> 2 -> 3 -> 4 -> 5]',
					output: '[5 -> 4 -> 3 -> 2 -> 1]',
					explanation:
						'Iteratively reverse the pointers in the linked list using three pointers: previous, current, and next.',
				},
				{
					title: 'Reverse Sublist',
					description: 'Reverse the nodes of a linked list from position m to n.',
					input: '[1 -> 2 -> 3 -> 4 -> 5], m=2, n=4',
					output: '[1 -> 4 -> 3 -> 2 -> 5]',
					explanation:
						'Reverse the nodes between positions m and n by adjusting the pointers of the nodes.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize pointers',
					explanation:
						'Set previous, current, and next pointers to help with reversing the list in place.',
				},
				{
					description: 'Iterate through the list',
					explanation:
						'Iterate through the list, reversing pointers for each node until the entire list (or sublist) is reversed.',
				},
				{
					description: 'Re-attach nodes',
					explanation:
						'After reversing the sublist, re-attach the remaining parts of the list to the reversed section.',
				},
			],
		},
	],
	Tree: [
		{
			id: crypto.randomUUID(),
			title: 'Tree Breadth First Search',
			description:
				'The Breadth First Search (BFS) pattern is used to traverse trees level by level.',
			category: 'Tree',
			useCases: 'Useful for finding shortest paths in an unweighted tree or graph.',
			timeComplexity: 'O(n)',
			spaceComplexity: 'O(n)',
			commonProblems: ['Shortest path in an unweighted tree', 'Finding the shortest path'],
			examples: [
				{
					title: 'Shortest Path in a Tree',
					description: 'Find the shortest path from node A to node B in a tree.',
					input:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					output:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					explanation: 'Breadth First Search (BFS) is used to traverse a tree level by level.',
				},
			],
			visualizationSteps: [
				{
					description: 'Start with root',
					explanation: 'Add the root node to a queue.',
				},
				{
					description: 'Process each level',
					explanation: 'For each node, add its children to the queue and process the node.',
				},
				{
					description: 'Continue until all nodes are processed',
					explanation: 'Continue processing nodes in the queue until it is empty.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: 'Tree Depth First Search',
			description:
				'The Depth First Search (DFS) pattern is used to explore all branches of a tree before backtracking.',
			category: 'Tree',
			useCases: 'Useful for pathfinding, solving puzzles, and searching deeper nodes first.',
			timeComplexity: 'O(n)',
			spaceComplexity: 'O(h) where h is the height of the tree.',
			commonProblems: ['Pathfinding', 'Finding the shortest path'],
			examples: [
				{
					title: 'Shortest Path in a Tree',
					description: 'Find the shortest path from node A to node B in a tree.',
					input:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					output:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					explanation: 'Breadth First Search (BFS) is used to traverse a tree level by level.',
				},
			],
			visualizationSteps: [
				{
					description: 'Start with root',
					explanation: 'Start from the root and visit the left subtree first.',
				},
				{
					description: 'Traverse to the left',
					explanation: 'Recursively traverse to the left child node.',
				},
				{
					description: 'Backtrack and traverse right',
					explanation: 'After visiting all left nodes, backtrack and visit the right nodes.',
				},
			],
		},
	],
	Graph: [
		{
			id: crypto.randomUUID(),
			title: 'Graph Breadth First Search',
			description: 'BFS is used to traverse a graph level by level.',
			category: 'Graph',
			useCases: 'Useful for finding the shortest path in an unweighted graph.',
			timeComplexity: 'O(V + E)',
			spaceComplexity: 'O(V)',
			commonProblems: ['Shortest path in an unweighted graph', 'Connected components of a graph'],
			examples: [
				{
					title: 'Shortest Path in a Graph',
					description: 'Find the shortest path from node A to node B in a graph.',
					input:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					output:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					explanation: 'Breadth First Search (BFS) is used to traverse a graph level by level.',
				},
			],
			visualizationSteps: [
				{
					description: 'Start with a node',
					explanation: 'Add the starting node to the queue.',
				},
				{
					description: 'Explore neighbors',
					explanation: 'Dequeue the node, explore its neighbors, and enqueue unvisited neighbors.',
				},
				{
					description: 'Continue until all nodes are visited',
					explanation: 'Repeat until all nodes are visited or the target node is found.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: 'Graph Depth First Search',
			description:
				'DFS is used to explore as far down as possible along each branch before backtracking.',
			category: 'Graph',
			useCases: 'Useful for exploring all paths, detecting cycles, and pathfinding.',
			timeComplexity: 'O(V + E)',
			spaceComplexity: 'O(V)',
			commonProblems: ['Detect a cycle in a graph', 'Find all connected components'],
			examples: [
				{
					title: 'Shortest Path in a Graph',
					description: 'Find the shortest path from node A to node B in a graph.',
					input:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					output:
						'[A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P -> Q -> R -> S -> T -> U -> V -> W -> X -> Y -> Z]',
					explanation: 'Breadth First Search (BFS) is used to traverse a graph level by level.',
				},
			],
			visualizationSteps: [
				{
					description: 'Start with a node',
					explanation: 'Start at the given node, mark it as visited.',
				},
				{
					description: 'Recursively explore neighbors',
					explanation: 'Recursively visit all unvisited neighbors.',
				},
				{
					description: 'Backtrack after visiting all neighbors',
					explanation: 'Once all neighbors are visited, backtrack and continue.',
				},
			],
		},
	],
	'Dynamic Programming': [
		{
			id: crypto.randomUUID(),
			title: '0/1 Knapsack',
			description:
				'The 0/1 Knapsack problem involves choosing items with given weights and values to maximize total value without exceeding a weight limit. Each item can be taken or not, hence 0/1.',
			category: 'Dynamic Programming',
			useCases: 'Useful for optimization problems involving decisions about subsets of items.',
			timeComplexity: 'O(n * W) where n is the number of items and W is the weight capacity',
			spaceComplexity: 'O(n * W)',
			commonProblems: ['Maximize the value within a weight limit', 'Subset sum problem'],
			examples: [
				{
					title: '0/1 Knapsack',
					description: 'Find the maximum value in a 0/1 Knapsack.',
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '10',
					explanation:
						'The 0/1 Knapsack problem involves choosing items with given weights and values to maximize total value without exceeding a weight limit. Each item can be taken or not, hence 0/1.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize table',
					explanation: 'Initialize a table with all 0s.',
				},
				{
					description: 'Fill table',
					explanation: 'Fill the table with the maximum value for each item.',
				},
				{
					description: 'Find the maximum value',
					explanation: 'Find the maximum value in the table.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: 'Unbounded Knapsack',
			description:
				'Unlike the 0/1 Knapsack, the Unbounded Knapsack allows for taking an unlimited quantity of each item.',
			category: 'Dynamic Programming',
			useCases: 'Useful when items can be repeated and the goal is to maximize value.',
			timeComplexity: 'O(n * W)',
			spaceComplexity: 'O(W)',
			commonProblems: ['Maximize value with unlimited items', 'Rod cutting problem'],
			examples: [
				{
					title: 'Unbounded Knapsack',
					description: 'Find the maximum value in an Unbounded Knapsack.',
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '10',
					explanation:
						'The Unbounded Knapsack problem involves choosing items with given weights and values to maximize total value without exceeding a weight limit. Each item can be taken or not, hence 0/1.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize table',
					explanation: 'Initialize a table with all 0s.',
				},
				{
					description: 'Fill table',
					explanation: 'Fill the table with the maximum value for each item.',
				},
				{
					description: 'Find the maximum value',
					explanation: 'Find the maximum value in the table.',
				},
			],
		},
	],
	Miscellaneous: [
		{
			id: crypto.randomUUID(),
			title: 'Cyclic Sort',
			description:
				'Cyclic Sort is a pattern that works with problems involving finding missing numbers or sorting arrays of a range of integers in place.',
			category: 'Miscellaneous',
			useCases: 'Useful for finding duplicates, missing numbers, or sorting ranges in linear time.',
			timeComplexity: 'O(n)',
			spaceComplexity: 'O(1)',
			commonProblems: ['Find missing number', 'Find all duplicates'],
			examples: [
				{
					title: 'Cyclic Sort',
					description: 'Sort an array of integers in place.',
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					explanation:
						'The Cyclic Sort pattern is used to sort an array of integers in place. It’s often used in sorting algorithms or in problems involving sorting data.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize array',
					explanation: 'Initialize an array with all 0s.',
				},
				{
					description: 'Find missing number',
					explanation: 'Find the missing number in the array.',
				},
				{
					description: 'Find all duplicates',
					explanation: 'Find all duplicates in the array.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: "Top 'K' Elements",
			description:
				'The Top K Elements pattern focuses on finding the K largest or smallest elements in an array, often using heaps or other efficient data structures.',
			category: 'Miscellaneous',
			useCases: 'Useful for problems where you need to find the top K items efficiently.',
			timeComplexity: 'O(n log K)',
			spaceComplexity: 'O(K)',
			commonProblems: ['Find K largest numbers', 'Kth smallest number'],
			examples: [
				{
					title: 'Top K Elements',
					description: 'Find the top K elements in an array.',
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					explanation:
						'The Top K Elements pattern focuses on finding the K largest or smallest elements in an array, often using heaps or other efficient data structures.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize heap',
					explanation: 'Initialize a heap with the first K elements.',
				},
				{
					description: 'Add remaining elements',
					explanation: 'Add the remaining elements to the heap.',
				},
				{
					description: 'Extract top K elements',
					explanation: 'Extract the top K elements from the heap.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: 'K-way merge',
			description:
				'The K-way merge technique merges K sorted arrays or lists into one sorted array. It’s often used in external sorting or in problems involving merging sorted data streams.',
			category: 'Miscellaneous',
			useCases: 'Useful for merging sorted arrays efficiently or working with large data.',
			timeComplexity: 'O(n log K)',
			spaceComplexity: 'O(K)',
			commonProblems: ['Merge K sorted arrays', 'Smallest range covering elements from K lists'],
			examples: [
				{
					title: 'K-way merge',
					description: 'Merge K sorted arrays into one sorted array.',
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					explanation:
						'The K-way merge technique merges K sorted arrays or lists into one sorted array. It’s often used in external sorting or in problems involving merging sorted data streams.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize array',
					explanation: 'Initialize an array with all 0s.',
				},
				{
					description: 'Merge K sorted arrays',
					explanation: 'Merge K sorted arrays into one sorted array.',
				},
				{
					description: 'Find smallest range',
					explanation: 'Find the smallest range covering elements from K lists.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: 'Modified Binary Search',
			description:
				'This pattern involves variations of binary search that apply to different types of sorted arrays or search conditions.',
			category: 'Miscellaneous',
			useCases: 'Useful for efficiently searching in sorted arrays with various conditions.',
			timeComplexity: 'O(log n)',
			spaceComplexity: 'O(1)',
			commonProblems: ['Search in a rotated array', 'Find ceiling of a number'],
			examples: [
				{
					title: 'Binary Search',
					description: 'Find the index of a target value in a sorted array.',
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					explanation:
						'The Binary Search pattern is used to find the index of a target value in a sorted array. It’s often used in searching, sorting, and other data processing tasks.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize array',
					explanation: 'Initialize an array with all 0s.',
				},
				{
					description: 'Find ceiling of a number',
					explanation: 'Find the ceiling of a number in the array.',
				},
				{
					description: 'Search in a rotated array',
					explanation: 'Search in a rotated array.',
				},
			],
		},
		{
			id: crypto.randomUUID(),
			title: 'Bitwise XOR',
			description:
				'The Bitwise XOR pattern uses XOR properties to solve problems involving unique elements or where numbers need to be paired.',
			category: 'Miscellaneous',
			useCases:
				'Useful for problems involving pairwise operations or eliminating duplicates efficiently.',
			timeComplexity: 'O(n)',
			spaceComplexity: 'O(1)',
			commonProblems: ['Find missing number', 'Find single non-duplicate element'],
			examples: [
				{
					title: 'Bitwise XOR',
					description: 'Find the missing number in an array.',
					input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					output: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
					explanation:
						'The Bitwise XOR pattern uses XOR properties to solve problems involving unique elements or where numbers need to be paired.',
				},
			],
			visualizationSteps: [
				{
					description: 'Initialize array',
					explanation: 'Initialize an array with all 0s.',
				},
				{
					description: 'Find missing number',
					explanation: 'Find the missing number in the array.',
				},
				{
					description: 'Find single non-duplicate element',
					explanation: 'Find the single non-duplicate element in the array.',
				},
			],
		},
	],
}
