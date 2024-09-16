interface Example {
	title: string
	description: string
	input: string
	output: string
	explanation: string
}

interface VisualizationStep {
	description: string
	explanation: string
}

interface Pattern {
	id: string
	title: string
	description: string
	category: string
	useCases: string
	timeComplexity: string
	spaceComplexity: string
	commonProblems: string[]
	examples: Example[]
	visualizationSteps: VisualizationStep[]
}

interface Algorithms {
	'Array/String': Pattern[]
	'Linked List': Pattern[]
	Tree: Pattern[]
	Graph: Pattern[]
	'Dynamic Programming': Pattern[]
	Miscellaneous: Pattern[]
}
