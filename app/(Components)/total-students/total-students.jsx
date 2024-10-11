'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../../store/slices/studentSlice'; // Adjust the path to your studentSlice

const TotalStudents = () => {
  const dispatch = useDispatch();
  
  // Get students data from the Redux store
  const { students, status } = useSelector((state) => state.students);

  useEffect(() => {
    // Fetch students only when status is 'idle'
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [dispatch, status]);

  return (
    <>
      {students?.length || 'Loading...'}
    </>
  );
};

export default TotalStudents;
