import React from 'react';

const EnrollStudentPage = () => {
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
                        <button className="w-full lg:w-72 h-9 focus:bg-white bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
                            <img src="/img/reading-book (1).svg" alt="Student Icon" className="w-6 h-6" />
                            <span>Student</span>
                        </button>
                        <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
                            <img src="/img/school (1).svg" alt="Teacher Icon" className="w-6 h-6" />
                            <span>Teacher</span>
                        </button>
                    </div>
                </div>
                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
                    {/* Heading */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-[#08183A]">Enroll Student</h1>
                    </div>
                    {/* Form and Image Upload Area */}
                    <div className="flex flex-col lg:flex-row lg:space-x-4 relative">
                        {/* Form */}
                        <div className="w-full lg:w-3/4 p-6 rounded-lg">
                            <form className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="studentName" className="text-2xl font-medium text-gray-700 w-1/3">Student Name:</label>
                                    <input type="text" id="studentName" className="p-2 border border-gray-300 rounded-md flex-grow placeholder-sm" placeholder="Enter student name" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="fatherName" className="text-2xl font-medium text-gray-700 w-1/3">Father Name:</label>
                                    <input type="text" id="fatherName" className="p-2 border border-gray-300 rounded-md flex-grow placeholder-sm" placeholder="Enter father name" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="className" className="text-2xl font-medium text-gray-700 w-1/3">Class Name:</label>
                                    <input type="text" id="className" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter class name" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="cnic" className="text-2xl font-medium text-gray-700 w-1/3">CNIC:</label>
                                    <input type="text" id="cnic" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter CNIC" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="studentEmail" className="text-2xl font-medium text-gray-700 w-1/3">Student Email:</label>
                                    <input type="email" id="studentEmail" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter student email" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="studentContact" className="text-2xl font-medium text-gray-700 w-1/3">Student Contact:</label>
                                    <input type="tel" id="studentContact" className="p-2 border border-gray-300 rounded-md flex-grow" placeholder="Enter student contact" />
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
                                        <span>Enroll Student</span>
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

export default EnrollStudentPage;
