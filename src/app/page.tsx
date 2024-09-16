'use client'

import { DescriptionCard, ExampleCard, Sidebar, ViewCard } from '@/components'

export default function Home() {
	return (
		<div className="h-screen bg-gray-100 overflow-auto">
			<Sidebar />

			<main className="p-10">
				<DescriptionCard />

				<ExampleCard />

				<ViewCard />
			</main>
		</div>
	)
}
