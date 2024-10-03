"use client"
import Header from '@/app/(Components)/header/header';
import SideBar from '@/app/(Components)/side-bar/side-bar-admin';
import React, { useState } from 'react';

const TeacherListPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            {/* Header start here */}
            <Header/>
            {/* Main Section */}
            <main className="flex flex-col lg:flex-row min-h-screen">
                
                <SideBar/>

                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
                    {/* Heading and Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
                        <h1 className="text-2xl font-bold text-[#08183A]">Total Teacher</h1>
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
                                {/* Example rows */}
                                {[...Array(10).keys()].map(index => (
                                    <tr key={index} className="bg-white shadow-md mb-2">
                                        <td className="py-2 px-4">{index + 1}</td>
                                        <td className="py-2 px-4">John Doe</td>
                                        <td className="py-2 px-4">English</td>
                                        <td className="py-2 px-4">3</td>
                                        <td className="py-2 px-4">
                                            <button className="bg-[#F2BA1D] text-[#08183A] px-4 py-1 rounded">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TeacherListPage;
