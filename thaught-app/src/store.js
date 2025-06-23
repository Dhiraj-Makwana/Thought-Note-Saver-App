import { configureStore } from '@reduxjs/toolkit'
import thoughtReducer from './Redux/thoughtSlice'

export default configureStore({
  reducer: {
    thaught: thoughtReducer,
  },
})