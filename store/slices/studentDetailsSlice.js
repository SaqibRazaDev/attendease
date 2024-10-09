// src/store/slices/studentDetailsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Adjust the import path to your firebase config

// Async thunk to fetch student details from Firebase by CNIC
export const fetchStudentDetails = createAsyncThunk(
  'studentDetails/fetchStudentDetails',
  async (cnic) => {
    const studentDoc = doc(db, 'EnrolledStudents', cnic); // Assuming CNIC is the document ID
    const studentSnapshot = await getDoc(studentDoc);
    if (studentSnapshot.exists()) {
      return { id: studentSnapshot.id, ...studentSnapshot.data() }; // Return the student data
    } else {
      throw new Error('Student not found'); // Handle case when student not found
    }
  }
);

const studentDetailsSlice = createSlice({
  name: 'studentDetails',
  initialState: {
    student: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    resetStudentDetails(state) {
      state.student = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudentDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.student = action.payload; // Populate the student with fetched data
      })
      .addCase(fetchStudentDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Store the error message
      });
  },
});

export const { resetStudentDetails } = studentDetailsSlice.actions;

export default studentDetailsSlice.reducer;
