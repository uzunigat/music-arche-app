import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './constants'
import { User } from './model'

export const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
            state.displayName = action.payload.displayName
            state.href = action.payload.href
            state.spotifyId = action.payload.spotifyId
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        }
    }
})

export const { setUser } = userSlicer.actions
export default userSlicer.reducer
