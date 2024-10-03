"use client";
import React, { useState } from 'react';

const EnrollTeacherPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            {/* Header start here */}
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
                    <div className="flex justify-end mb-4 lg:mb-6 lg:hidden">
                        <img src="img/menu.svg" alt="Menu" className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                    </div>
                    {/* Buttons */}
                    <div className={`space-y-4 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                        <button className="w-56 lg:w-72 h-9 bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
                            <img src="img/dashboard 1.svg" alt="Dashboard Icon" className="w-6 h-6" />
                            <span>Enroll Now</span>
                        </button>
                        
                        
                    </div>
                </div>
                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
                    {/* Heading */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-[#08183A]">Enroll Teacher</h1>
                    </div>
                    {/* Form and Image Upload Area */}
                    <div className="flex flex-col lg:flex-row lg:space-x-4 relative">
                        {/* Form */}
                        <div className="w-full lg:w-3/4 p-6 rounded-lg">
                            <form className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="teacherName" className="text-2xl font-medium text-gray-700 w-1/3">Teacher Name:</label>
                                    <input type="text" id="teacherName" className="p-2 border border-gray-300 rounded-md flex-grow placeholder-sm" placeholder="Enter teacher name" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="noOfPeriod" className="text-2xl font-medium text-gray-700 w-1/3">No of Periods:</label>
                                    <input type="number" id="noOfPeriod" className="p-2 border border-gray-300 rounded-md flex-grow placeholder-sm" placeholder="Enter number of periods" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="cnic" className="text-2xl font-medium text-gray-700 w-1/3">CNIC:</label>
                                    <input type="text" id="cnic" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter CNIC" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="subjectName" className="text-2xl font-medium text-gray-700 w-1/3">Subject Name:</label>
                                    <input type="text" id="subjectName" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter subject name" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="teacherEmail" className="text-2xl font-medium text-gray-700 w-1/3">Teacher Email:</label>
                                    <input type="email" id="teacherEmail" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter teacher email" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="teacherContact" className="text-2xl font-medium text-gray-700 w-1/3">Teacher Contact:</label>
                                    <input type="tel" id="teacherContact" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter teacher contact" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="teacherPassword" className="text-2xl font-medium text-gray-700 w-1/3">Create Password:</label>
                                    <input type="password" id="teacherPassword" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Create a password" />
                                </div>
                                {/* Image Upload Area for small and medium devices */}
                                <div className="flex items-center justify-center lg:hidden mt-4">
                                    <div className="w-32 h-40 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center relative">
                                        <span className="text-gray-400 text-center">Drop image here or click to upload</span>
                                        <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4 lg:mt-0">
                                    <button className="w-full sm:w-48 h-12 mt-8 text-xl border border-black text-[#08183A] flex items-center justify-center space-x-2 rounded">
                                        <img src="/img/add 1.svg" alt="Add Icon" className="w-9 h-9" />
                                        <span>Enroll Teacher</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Image Upload Area for large devices */}
                        <div className="hidden lg:flex items-center justify-center lg:items-start lg:justify-end mt-4 lg:mt-0">
                            <div className="w-32 h-40 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center relative">
                                <span className="text-gray-400 text-center">Choose image</span>
                                <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EnrollTeacherPage;
