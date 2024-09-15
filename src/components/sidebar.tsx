import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { useEffect, useRef, useState } from 'react'

import { Button } from './ui/button'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { ScrollArea } from './ui/scroll-area'
import { algorithms } from '@/data'

export default function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
	const sidebarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
				setIsSidebarOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<>
			<div
				ref={sidebarRef}
				className={
					'absolute top-0 left-0 h-full w-max transition-all duration-300 ease-in-out z-10' +
					(isSidebarOpen ? ' translate-x-0' : ' translate-x-[-100%]')
				}
			>
				<Button
					variant="outline"
					size="icon"
					className="absolute cursor-pointer top-2 right-[-2.5rem] p-1"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					asChild
				>
					<HiOutlineMenuAlt2 />
				</Button>

				<aside className="h-full p-4 bg-white border-r w-72">
					<h2 className="mb-4 text-lg font-semibold">Problems</h2>

					<ScrollArea className="h-[calc(100vh-5rem)]">
						<Accordion type="single" collapsible className="w-full">
							{Object.entries(algorithms).map(([category, patterns]) => (
								<AccordionItem value={category} key={category}>
									<AccordionTrigger>{category}</AccordionTrigger>
									<AccordionContent>
										<ul>
											{patterns.map(pattern => (
												<li key={pattern.id} className="mb-2">
													<Button variant="ghost" className="w-full justify-start">
														{pattern.title}
													</Button>
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</ScrollArea>
				</aside>
			</div>

			{isSidebarOpen && (
				<div className="fixed top-0 left-0 h-full w-full bg-black/40 " aria-hidden="true" />
			)}
		</>
	)
}
