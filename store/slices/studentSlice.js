import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  studentName: 'Saqib Raza',
  gender: 'Male',
  class: '10th Grade',
  cnic: '12345-6789012-3',
  rollNo: 123,
  admissionDate: '2020-01-01',
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudentName: (state, action) => {
      state.studentName = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setClass: (state, action) => {
      state.class = action.payload;
    },
    setCnic: (state, action) => {
      state.cnic = action.payload;
    },
    setRollNo: (state, action) => {
      state.rollNo = action.payload;
    },
    setAdmissionDate: (state, action) => {
      state.admissionDate = action.payload;
    },
  },
});

export const {
  setStudentName,
  setGender,
  setClass,
  setCnic,
  setRollNo,
  setAdmissionDate,
} = studentSlice.actions;

export default studentSlice.reducer;
