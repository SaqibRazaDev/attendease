// src/features/teacherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Adjust the import path to your firebase config

// Async thunk to fetch teachers from Firebase
export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', async () => {
  const teacherCollection = collection(db, 'EnrolledTeachers'); // Adjust collection name as needed
  const teacherSnapshot = await getDocs(teacherCollection);
  const teacherList = teacherSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return teacherList; // This returns the array of teacher objects
});

const teacherSlice = createSlice({
  name: 'teachers',
  initialState: {
    teachers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teachers = action.payload; // Populate the teachers array with the fetched data
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default teacherSlice.reducer;
