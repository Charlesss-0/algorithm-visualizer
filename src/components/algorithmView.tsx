import { Card, CardContent, CardHeader } from './ui/card'
import { useMemo, useState } from 'react'

import { Button } from './ui/button'

export default function AlgorithmView() {
	const array = useMemo(() => Array.from({ length: 8 }, (_, i) => i + 1), [])

	const [currentStep, setCurrentStep] = useState(0)
	const [leftPointer, setLeftPointer] = useState(0)
	const [rightPointer, setRightPointer] = useState(array.length - 1)

	const steps = [
		{
			description: 'Initialize pointers',
			explanation:
				'Set left pointer to the start (index 0) and right pointer to the end (index 7) of the array.',
		},
		{
			description: 'Compare elements',
			explanation: 'Compare elements at left (1) and right (15) pointers.',
		},
		{ description: 'Move pointers', explanation: 'Move left pointer right (as 1 < 15).' },
		{ description: 'Compare again', explanation: 'Compare new left (2) with right (15).' },
		{
			description: 'Continue process',
			explanation:
				'Keep moving pointers and comparing until they meet or find the desired condition.',
		},
	]

	const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1)
			if (currentStep === 1 || currentStep === 3) {
				setLeftPointer(prev => Math.min(prev + 1, rightPointer))
			}
		}
	}

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
			if (currentStep === 2 || currentStep === 4) {
				setLeftPointer(prev => Math.max(prev - 1, 0))
			}
		}
	}

	const resetVisualization = () => {
		setCurrentStep(0)
		setLeftPointer(0)
		setRightPointer(array.length - 1)
	}

	return (
		<main className="p-10">
			<Card>
				<CardHeader>Algorithm Visualizer</CardHeader>

				<CardContent>
					<div className="flex flex-col items-center space-y-8">
						<div className="flex justify-center items-end space-x-1 h-40">
							{array.map((num, index) => (
								<div
									key={index}
									className={`w-10 flex flex-col items-center justify-end transition-all duration-300 ease-in-out
                      ${index === leftPointer ? 'bg-blue-200 border-blue-500 border-2' : ''}
                      ${index === rightPointer ? 'bg-green-200 border-green-500 border-2' : ''}
                      ${index > leftPointer && index < rightPointer ? 'bg-gray-100' : ''}
                    `}
									style={{ height: `${(num / Math.max(...array)) * 100}%` }}
								>
									<span className="mb-1">{num}</span>
									{index === leftPointer && <span className="text-xs text-blue-500">L</span>}
									{index === rightPointer && <span className="text-xs text-green-500">R</span>}
								</div>
							))}
						</div>

						<div className="text-center space-y-4">
							<p className="font-semibold">{steps[currentStep].description}</p>
							<p>{steps[currentStep].explanation}</p>
						</div>

						<div className="flex justify-center space-x-4">
							<Button onClick={prevStep} disabled={currentStep === 0}>
								Previous Step
							</Button>
							<Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
								Next Step
							</Button>
							<Button onClick={resetVisualization}>Reset</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	)
}
