import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const geist = localFont({
	src: './fonts/GeistVF.woff',
	display: 'swap',
	weight: '400',
})

export const metadata: Metadata = {
	title: 'Algo View',
	description: 'Algorithm Visualizer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${geist.className} antialiased`}>{children}</body>
		</html>
	)
}
