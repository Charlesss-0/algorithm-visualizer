'use client'

import { Description, Example, Sidebar, Visualization } from '@/components'

export default function Home() {
	return (
		<div className="h-screen overflow-auto bg-gray-100">
			<Sidebar />

			<main className="px-12 py-5 space-y-5">
				<Description />

				<Example />

				<Visualization />
			</main>
		</div>
	)
}
