"use client";

import React, { useState } from 'react';

const TeacherAttendancePage = () => {
    // State to manage selected attendance
    const [attendance, setAttendance] = useState({
        week1: { Mon: '', Tue: '', Wed: '', Thu: '', Fri: '' },
        week2: { Mon: '', Tue: '', Wed: '', Thu: '', Fri: '' },
        week3: { Mon: '', Tue: '', Wed: '', Thu: '', Fri: '' },
        week4: { Mon: '', Tue: '', Wed: '', Thu: '', Fri: '' },
    });

    // Handler for radio button change
    const handleAttendanceChange = (week, day, value) => {
        setAttendance(prev => ({
            ...prev,
            [week]: {
                ...prev[week],
                [day]: value,
            },
        }));
    };

    // Render table row for days of the week
    const renderTableRows = (week) => {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        return days.map(day => (
            <tr key={day}>
                <td className="p-2 border-b border-gray-300">{day}</td>
                <td className="p-2 border-b border-gray-300 text-center">
                    <label className="flex flex-col items-center">
                        <input
                            type="radio"
                            name={`${week}-${day}`}
                            value="P"
                            checked={attendance[week][day] === 'P'}
                            onChange={() => handleAttendanceChange(week, day, 'P')}
                            className="appearance-none w-6 h-6 border border-gray-400 rounded-sm checked:bg-[#08183A] checked:border-[#08183A]"
                        />
                        <span className="text-xs text-[#08183A]">P</span>
                    </label>
                </td>
                <td className="p-2 border-b border-gray-300 text-center">
                    <label className="flex flex-col items-center">
                        <input
                            type="radio"
                            name={`${week}-${day}`}
                            value="A"
                            checked={attendance[week][day] === 'A'}
                            onChange={() => handleAttendanceChange(week, day, 'A')}
                            className="appearance-none w-6 h-6 border border-gray-400 rounded-sm checked:bg-[#08183A] checked:border-[#08183A]"
                        />
                        <span className="text-xs text-[#08183A]">A</span>
                    </label>
                </td>
                <td className="p-2 border-b border-gray-300 text-center">
                    <label className="flex flex-col items-center">
                        <input
                            type="radio"
                            name={`${week}-${day}`}
                            value="L"
                            checked={attendance[week][day] === 'L'}
                            onChange={() => handleAttendanceChange(week, day, 'L')}
                            className="appearance-none w-6 h-6 border border-gray-400 rounded-sm checked:bg-[#08183A] checked:border-[#08183A]"
                        />
                        <span className="text-xs text-[#08183A]">L</span>
                    </label>
                </td>
            </tr>
        ));
    };

    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            {/* Header */}
            <header>
                <nav className="bg-white shadow-lg p-4">
                    <div className="container mx-auto flex flex-wrap justify-between items-center">
                        {/* Left side: Logo */}
                        <div className="flex items-center">
                            <img src="img/logo (2).svg" alt="Logo" className="h-10 mr-3" />
                        </div>
                        {/* Right side: Profile icon and admin name */}
                        <div className="flex items-center mt-4 sm:mt-0">
                            <img src="img/Admin name.svg" alt="Profile Icon" className="h-12 w-36 rounded-full mr-2" />
                        </div>
                    </div>
                </nav>
            </header>
            {/* Main Section */}
            <main className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Container */}
                <div className="w-full lg:w-1/4 bg-[#08183A] p-4 flex flex-col lg:h-screen">
                    {/* Hamburger Icon */}
                    <div className="flex justify-end mb-4 lg:mb-6">
                        <img src="img/menu.svg" alt="Menu" className="h-6 w-6" />
                    </div>
                    {/* Buttons */}
                    <div className="space-y-4">
                        <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] focus:bg-white text-[#08183A] flex items-center justify-center space-x-2 rounded">
                            <img src="img/dashboard 1.svg" alt="Dashboard Icon" className="w-6 h-6" />
                            <span>Dashboard</span>
                        </button>
                        <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
                            <img src="/img/reading-book (1).svg" alt="Student Icon" className="w-6 h-6" />
                            <span>Student</span>
                        </button>
                        <button className="w-full lg:w-72 h-9 focus:bg-white bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
                            <img src="/img/school (1).svg" alt="Teacher Icon" className="w-6 h-6" />
                            <span>Teacher</span>
                        </button>
                        <button className="w-full lg:w-72 h-9 focus:bg-white bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
              <img src="/img/report-card (1) (1).svg" alt="Teacher Icon" className="w-6 h-6" />
              <span>Apply For Leave</span>
            </button>
                    </div>
                </div>
                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-14 lg:h-screen overflow-y-auto">
                    {/* Heading */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#08183A]">Teacher Attendance</h1>
                    </div>
                    {/* Attendance Tables */}
                    <div className="flex flex-wrap gap-4">
                        {[...Array(4)].map((_, index) => {
                            const week = `week${index + 1}`;
                            return (
                                <div key={week} className="flex-1 bg-[#F2F2F2] p-4">
                                    <table className="w-full border-collapse bg-white">
                                        <thead>
                                            <tr>
                                                <th className="text-left p-2 border-b-2 border-gray-300 bg-white">Week {index + 1}</th>
                                                <th className="text-center p-2 border-b-2 border-gray-300 bg-white">P</th>
                                                <th className="text-center p-2 border-b-2 border-gray-300 bg-white">A</th>
                                                <th className="text-center p-2 border-b-2 border-gray-300 bg-white">L</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderTableRows(week)}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TeacherAttendancePage;
