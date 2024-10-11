'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../../store/slices/teacherSlice'; // Adjust the path to your teacherSlice

const TotalTeachers = () => {
  const dispatch = useDispatch();
  
  // Get teachers data from the Redux store
  const { teachers, status } = useSelector((state) => state.teachers);

  useEffect(() => {
    // Fetch teachers only when status is 'idle'
    if (status === 'idle') {
      dispatch(fetchTeachers());
    }
  }, [dispatch, status]);

  return (
    <>
      {teachers?.length || 'Loading...'}
    </>
  );
};

export default TotalTeachers;
