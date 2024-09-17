import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { useEffect, useState } from 'react'

import { RootState } from '@/redux'
import { useSelector } from 'react-redux'

export default function Example() {
	const { selectedPattern } = useSelector((state: RootState) => state.app)
	const [selectedTab, setSelectedTab] = useState(selectedPattern.examples[0]?.title || '')

	useEffect(() => {
		if (selectedPattern.examples.length > 0) {
			setSelectedTab(selectedPattern.examples[0].title)
		}
	}, [selectedPattern])

	return (
		<Card>
			<CardHeader>
				<CardTitle>Examples</CardTitle>
			</CardHeader>

			<CardContent>
				<Tabs value={selectedTab} onValueChange={setSelectedTab}>
					<TabsList>
						{selectedPattern.examples.map((example, index) => (
							<TabsTrigger key={index} value={example.title}>
								{example.title}
							</TabsTrigger>
						))}
					</TabsList>

					{selectedPattern.examples.map((example, index) => (
						<TabsContent key={index} value={example.title} className="p-2 space-y-4">
							<div>
								<h3 className="font-semibold">Example {index + 1}</h3>

								<p className="text-sm text-muted-foreground">{example.description}</p>
							</div>

							<div className="space-y-2">
								<p>
									<strong>Input:</strong> {example.input}
								</p>

								<p>
									<strong>Output:</strong> {example.output}
								</p>

								<p>
									<strong>Explanation:</strong> {example.explanation}
								</p>
							</div>
						</TabsContent>
					))}
				</Tabs>
			</CardContent>
		</Card>
	)
}
