'use client'

import { AppStore, createAppStore } from '@/redux'

import { Provider } from 'react-redux'
import { useRef } from 'react'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<AppStore>()

	if (!storeRef.current) {
		storeRef.current = createAppStore()
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
