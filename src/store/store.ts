import { configureStore } from '@reduxjs/toolkit'
import tokenReducers from './token/token-slicer'
import userReducers from './user/user-slicer'

export const store = configureStore({
    reducer: {
        token: tokenReducers,
        user: userReducers
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
