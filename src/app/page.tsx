'use client'

import { AlgorithmDescription, AlgorithmView, Sidebar } from '@/components'

export default function Home() {
	return (
		<div className="h-screen bg-gray-100">
			<Sidebar />

			<AlgorithmDescription />

			<AlgorithmView />
		</div>
	)
}
