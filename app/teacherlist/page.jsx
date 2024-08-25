import React from 'react';

const TeacherListPage = () => {
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
                    <div className="flex justify-end mb-4 lg:mb-6">
                        <img src="img/menu.svg" alt="Menu" className="h-6 w-6" />
                    </div>
                    {/* Buttons */}
                    <div className="space-y-4">
                        <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
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
                    </div>
                </div>

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
