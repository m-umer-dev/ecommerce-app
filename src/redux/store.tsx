import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productsSlice'
import blogReducer from './slices/blogsSlice'
import usersReducer from './slices/usersSlice'
import cartReducer from "./slices/cartSlice"
export const store = configureStore({
  reducer: {

    product: productReducer,
    blogs: blogReducer,
    users: usersReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch