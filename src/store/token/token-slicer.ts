import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './constants'

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string>) => {
            console.log(`state:`, state)
            console.log(`action:`, action)

            state.id = action.payload
        }
    }
})

export const { setId } = counterSlice.actions
export default counterSlice.reducer
