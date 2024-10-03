import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import studentReducer from './slices/studentSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
  },
})