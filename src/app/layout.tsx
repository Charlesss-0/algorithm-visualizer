import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import StoreProvider from './store-provider'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Algo View',
	description: 'Algorithm Visualizer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={`${inter.className} antialiased`}>{children}</body>
			</html>
		</StoreProvider>
	)
}
