import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

import { Button } from '../ui/button'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { ScrollArea } from '../ui/scroll-area'
import { problems } from '@/data'
import { useState } from 'react'

export default function Sidebar() {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	return (
		<div
			className={
				'absolute top-0 left-0 h-full w-max transition-all duration-300 ease-in-out' +
				(isVisible ? ' translate-x-0' : ' translate-x-[-100%]')
			}
		>
			<Button
				variant="ghost"
				size="icon"
				className="absolute cursor-pointer top-2 right-[-2.5rem]"
				onClick={() => setIsVisible(!isVisible)}
				asChild
			>
				<HiOutlineMenuAlt2 />
			</Button>

			<aside className="h-full p-4 bg-white border-r w-72">
				<h2 className="mb-4 text-lg font-semibold">Problems</h2>

				<Tabs defaultValue="Easy">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="Easy">Easy</TabsTrigger>
						<TabsTrigger value="Medium">Medium</TabsTrigger>
						<TabsTrigger value="Hard">Hard</TabsTrigger>
					</TabsList>

					{Object.entries(problems).map(([difficulty, problems]) => (
						<TabsContent key={difficulty} value={difficulty}>
							<ScrollArea className="h-[calc(100vh-12rem)]">
								<ul>
									{problems.map(problem => (
										<Button
											key={problem.id}
											variant="ghost"
											className="justify-start w-full mb-1 cursor-pointer"
											asChild
										>
											<li>{problem.title}</li>
										</Button>
									))}
								</ul>
							</ScrollArea>
						</TabsContent>
					))}
				</Tabs>
			</aside>
		</div>
	)
}
