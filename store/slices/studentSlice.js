// src/features/studentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Adjust the import path to your firebase config

// Async thunk to fetch students from Firebase
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const studentCollection = collection(db, 'EnrolledStudents');
  const studentSnapshot = await getDocs(studentCollection);
  const studentList = studentSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return studentList; // This returns the array of student objects
});

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload; // Populate the students array with the fetched data
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;
