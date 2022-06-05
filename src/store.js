import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import modalReducer from './features/modalSlice'
import postsReducer from './features/postSlice'

export const store = configureStore({
  reducer: {
      cart: cartReducer,
      modal: modalReducer,
      posts: postsReducer
  },
})