import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { algorithms } from '@/data'

interface AppState {
	selectedPattern: Pattern
}

const initialState: AppState = {
	selectedPattern: algorithms['Array/String'][0],
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setSelectedPattern: (state, action: PayloadAction<AppState['selectedPattern']>) => {
			state.selectedPattern = action.payload
		},
	},
})

export { appSlice }
