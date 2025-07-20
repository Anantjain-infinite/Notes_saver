import { configureStore } from '@reduxjs/toolkit'
import slice from '../feat/slice'
export default configureStore({
  reducer: {
    paste: slice,
  }
})