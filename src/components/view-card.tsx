import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

import { Button } from './ui/button'
import { RootState } from '@/redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function ViewCard() {
	const { selectedPattern } = useSelector((state: RootState) => state.app)
	const [currentStep, setCurrentStep] = useState(0)

	const nextStep = () => {
		if (currentStep < selectedPattern.visualizationSteps?.length - 1) {
			setCurrentStep(currentStep + 1)
		}
	}

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
		}
	}

	const resetVisualization = () => {
		setCurrentStep(0)
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>{selectedPattern.title}</CardTitle>
			</CardHeader>

			<CardContent>
				<div className="flex flex-col items-center space-y-8">
					<div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
						<p className="text-gray-500">Visualization placeholder for {selectedPattern.title}</p>
					</div>
					<div className="text-center space-y-4">
						<p className="font-semibold">
							{selectedPattern.visualizationSteps[currentStep].description}
						</p>
						<p>{selectedPattern.visualizationSteps[currentStep].explanation}</p>
					</div>

					<div className="flex justify-center space-x-4">
						<Button onClick={prevStep} disabled={currentStep === 0}>
							Previous Step
						</Button>
						<Button
							onClick={nextStep}
							disabled={currentStep === selectedPattern.visualizationSteps?.length - 1}
						>
							Next Step
						</Button>
						<Button onClick={resetVisualization}>Reset</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
