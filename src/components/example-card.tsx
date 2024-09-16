import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { useEffect, useState } from 'react'

import { RootState } from '@/redux'
import { useSelector } from 'react-redux'

export default function ExampleCard() {
	const { selectedPattern } = useSelector((state: RootState) => state.app)
	const [selectedTab, setSelectedTab] = useState(selectedPattern.examples[0]?.title || '')

	useEffect(() => {
		if (selectedPattern.examples.length > 0) {
			setSelectedTab(selectedPattern.examples[0].title)
		}
	}, [selectedPattern])

	return (
		<Card className="mb-8">
			<CardHeader>
				<CardTitle>Examples: {selectedPattern.title}</CardTitle>
			</CardHeader>

			<CardContent>
				<Tabs value={selectedTab} onValueChange={setSelectedTab}>
					<TabsList>
						{selectedPattern.examples.map((example, index) => (
							<TabsTrigger key={index} value={example.title}>
								Example {index + 1}
							</TabsTrigger>
						))}
					</TabsList>

					{selectedPattern.examples.map((example, index) => (
						<TabsContent key={index} value={example.title}>
							<Card>
								<CardHeader>
									<CardTitle>{example.title}</CardTitle>
									<CardDescription>{example.description}</CardDescription>
								</CardHeader>

								<CardContent>
									<p>
										<strong>Input:</strong> {example.input}
									</p>
									<p>
										<strong>Output:</strong> {example.output}
									</p>
									<p>
										<strong>Explanation:</strong> {example.explanation}
									</p>
								</CardContent>
							</Card>
						</TabsContent>
					))}
				</Tabs>
			</CardContent>
		</Card>
	)
}
