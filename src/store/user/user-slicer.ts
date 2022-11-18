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
            state.spotifyId = action.payload.spotifyId
            state.tokenId = action.payload.tokenId
            state.externalUrlSpotify = action.payload.externalUrlSpotify
            state.followersHref = action.payload.followersHref
            state.followersTotal = action.payload.followersTotal
            state.href = action.payload.href
            state.type = action.payload.type
            state.uri = action.payload.uri
            state.imagesUrl = action.payload.imagesUrl
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        },
        setUserId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        },
        clearUser: (state) => {
            state = initialState
        }
    }
})

export const { setUser, setUserId, clearUser } = userSlicer.actions
export default userSlicer.reducer
