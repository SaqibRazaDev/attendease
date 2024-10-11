"use client";
import Header from '@/app/(Components)/header/header';
import SideBar from '@/app/(Components)/side-bar/side-bar-admin';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../../../store/slices/teacherSlice'; // Adjust the path to your teacherSlice
import { useRouter } from 'next/navigation';
import { BsPersonFillAdd } from "react-icons/bs";

const TeacherListPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Get teachers data from the Redux store
    const { teachers, status } = useSelector((state) => state.teachers);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTeachers());
        }
    }, [dispatch, status]);

    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            {/* Header start here */}
            <Header />
            {/* Main Section */}
            <main className="flex flex-col lg:flex-row min-h-screen">
                <SideBar />
                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
                    {/* Heading and Button */}
                    <div className="flex justify-between items-center my-4">
                        <h1 className="text-2xl font-bold text-[#08183A]">
                            Total Teachers: {teachers.length}
                        </h1>

                        <button
                            className="w-48 h-10 text-base border border-black text-[#08183A] flex items-center justify-center gap-2 rounded hover:bg-slate-200"
                            onClick={() => router.push('/admin/enrollment/teacher-enroll')}
                        >
                            <BsPersonFillAdd className='w-7 h-7' />
                            <span>Enroll Teacher</span>
                        </button>
                    </div>
                    {/* Table */}
                    <div className="overflow-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 font-bold text-left">Sr. No</th>
                                    <th className="py-2 px-4 font-bold text-left">Teacher Name</th>
                                    <th className="py-2 px-4 font-bold text-left">Subject</th>
                                    <th className="py-2 px-4 font-bold text-left">Lecture</th>
                                    <th className="py-2 px-4 font-bold text-left">Attendance</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {status === 'loading' ? (
                                    <tr>
                                        <td colSpan="5" className="py-2 px-4 text-center">Loading...</td>
                                    </tr>
                                ) : (
                                    teachers.map((teacher, index) => (
                                        <tr key={teacher.id} className="bg-white shadow-md mb-2">
                                            <td className="py-2 px-4">{index + 1}</td>
                                            <td className="py-2 px-4">{teacher.teacherName}</td>
                                            <td className="py-2 px-4">{teacher.subjectName}</td>
                                            <td className="py-2 px-4">{teacher.noOfPeriod}</td>

                                            <td className="py-2 px-4">
                                                <button className="bg-[#F2BA1D] text-[#08183A] px-4 py-1 rounded">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TeacherListPage;
