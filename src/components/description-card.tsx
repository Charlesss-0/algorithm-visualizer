import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

import { RootState } from '@/redux'
import { useSelector } from 'react-redux'

export default function DescriptionCard() {
	const { selectedPattern } = useSelector((state: RootState) => state.app)

	return (
		<Card className="mb-8">
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>{selectedPattern.title}</CardTitle>
					<span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
						{selectedPattern.category}
					</span>
				</div>
				<CardDescription>{selectedPattern.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<h3 className="font-semibold">Use Cases:</h3>
						<p className="text-sm text-muted-foreground">{selectedPattern.useCases}</p>
					</div>
					<div>
						<h3 className="font-semibold">Time Complexity:</h3>
						<p className="text-sm text-muted-foreground">{selectedPattern.timeComplexity}</p>
					</div>
					<div>
						<h3 className="font-semibold">Space Complexity:</h3>
						<p className="text-sm text-muted-foreground">{selectedPattern.spaceComplexity}</p>
					</div>
					<div>
						<h3 className="font-semibold">Common Problems:</h3>
						<ul className="list-disc list-inside text-sm text-muted-foreground">
							{selectedPattern.commonProblems?.map((problem, index) => (
								<li key={index}>{problem}</li>
							))}
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
