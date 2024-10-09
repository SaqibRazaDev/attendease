"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../../../store/slices/studentSlice'; // Adjust path accordingly
import { useRouter } from 'next/navigation';
import Header from '@/app/(Components)/header/header';
import SideBar from '@/app/(Components)/side-bar/side-bar-admin';
import { BsPersonFillAdd } from "react-icons/bs";

function Page() {
  
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Access students, status, and error from the Redux store
  const { students = [], status, error } = useSelector((state) => state.students || {});

  // Fetch students on component mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [dispatch, status]);

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header start here */}
      <Header />

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Container */}
        <SideBar />

        {/* Right Container */}
        <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
          {/* Heading and Button */}
          <div className="flex justify-between items-center my-4">
            <h1 className="text-2xl font-bold text-[#08183A]">
              Total students: {students.length}
            </h1>

            <button 
              className="w-48 h-10 text-base border border-black text-[#08183A] flex items-center justify-center gap-2 rounded hover:bg-slate-200"
              onClick={() => router.push('/admin/enrollment/student-enroll')}
            >
              <BsPersonFillAdd className='w-7 h-7' />
              <span>Enroll Student</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            {status === 'loading' && <p>Loading students...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && students.length > 0 && (
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 font-bold text-left">Sr. No</th>
                    <th className="py-2 px-4 font-bold text-left">Student Name</th>
                    <th className="py-2 px-4 font-bold text-left">Email</th>
                    <th className="py-2 px-4 font-bold text-left">Class Name</th>
                    <th className="py-2 px-4 font-bold text-left">CNIC</th>
                    <th className="py-2 px-4 font-bold text-left">Contact</th>
                    <th className="py-2 px-4 font-bold text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {students.map((student, index) => (
                    <tr key={student.id} className="bg-white shadow-md mb-2">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{student.studentName}</td>
                      <td className="py-2 px-4">{student.studentEmail}</td>
                      <td className="py-2 px-4">{student.className}</td>
                      <td className="py-2 px-4">{student.cnic}</td>
                      <td className="py-2 px-4">{student.studentContact}</td>
                      <td className="py-2 px-4 text-center">
                        <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {status === 'succeeded' && students.length === 0 && (
              <p>No students found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
