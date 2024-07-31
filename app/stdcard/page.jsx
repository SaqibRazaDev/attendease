import React from 'react';

const StudentDetailsPage = () => {
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
                    </div>
                </div>
                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-14 lg:h-screen overflow-y-auto">
                    {/* Heading */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#08183A]">Student Details</h1>
                    </div>
                    {/* Flex Container for Cards */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
                        {/* Student Card */}
                        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex-shrink-0 flex flex-col w-full lg:w-[650px] h-auto lg:h-[450px]">
                            <div className="flex flex-col lg:flex-row mb-4">
                                <img src="img/Rectangle 32.svg" alt="Student Photo" className="h-48 w-48 lg:h-72 lg:w-60 rounded-md mr-8 border border-black" />
                                <div className="flex flex-col justify-center space-y-4 mt-4 lg:mt-0">
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-lg text-[#08183A] w-40">Student Name:</p>
                                        <p className="ml-8 text-sm">John Doe</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-lg text-[#08183A] w-40">Gender:</p>
                                        <p className="ml-8 text-sm">Male</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">Class:</p>
                                        <p className="ml-8 text-sm">10th Grade</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">CNIC:</p>
                                        <p className="ml-8 text-sm">12345-6789012-3</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">Roll No:</p>
                                        <p className="ml-8 text-sm">123</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">Admission Date:</p>
                                        <p className="ml-8 text-sm">2020-01-01</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4 space-x-4">
                                <button className="border border-[#08183A] w-14 h-14 text-white px-4 py-2 rounded">
                                    <img src="img/printer.svg" className="w-9 h-9" alt="" />
                                </button>
                                <button className="border border-[#08183A] w-14 h-14 text-white px-4 py-2 rounded">
                                    <img src="img/download.svg" className="w-9 h-9" alt="" />
                                </button>
                            </div>
                        </div>
                        {/* Progress Cards */}
                        <div className="flex flex-col gap-6 w-full lg:w-auto">
                            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center h-36 w-72">
                                <div>
                                    <p className="font-bold text-2xl text-[#08183A]">Attendance Progress</p>
                                    <p className="text-2xl font-bold text-[#08183A]">80.2%</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center h-36 w-72">
                                <div>
                                    <p className="font-bold text-2xl text-[#08183A]">Result Progress</p>
                                    <p className="text-2xl font-bold text-[#08183A]">80%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDetailsPage;
