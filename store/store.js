import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import studentReducer from './slices/studentSlice'; 
import teacherReducer from './slices/teacherSlice';
import studentDetailsReducer from './slices/studentDetailsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    students: studentReducer,
    teachers: teacherReducer,
    studentDetails: studentDetailsReducer,
  },
})