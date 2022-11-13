import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './constants'

export const counterSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    }
})

export const { setId } = counterSlice.actions
export default counterSlice.reducer
