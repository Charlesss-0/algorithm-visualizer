import { appSlice } from './appSlice'
import { configureStore } from '@reduxjs/toolkit'

export const createAppStore = () => {
	const store = configureStore({
		reducer: {
			app: appSlice.reducer,
		},
	})

	return store
}

export type AppStore = ReturnType<typeof createAppStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
