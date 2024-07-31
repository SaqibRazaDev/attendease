import React from 'react';

const AdminDashboard = () => {
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
            <main className="flex flex-col lg:flex-row min-h-full">
                {/* Left Container */}
                <div className="w-full lg:w-1/4 bg-[#08183A] p-4 flex flex-col">
                    {/* Hamburger Icon */}
                    <div className="flex justify-end mb-6">
                        <img src="img/menu.svg" alt="Menu" className="h-6 w-6" />
                    </div>
                    {/* Buttons */}
                    <div className="space-y-4">
                        <button className="w-full lg:w-72 h-9 focus:bg-white bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
                            <img src="img/dashboard 1.svg" alt="Dashboard Icon" className="w-6 h-6" />
                            <span>Dashboard</span>
                        </button>
                        <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
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
                <div className="flex-1 p-4 flex flex-col">
                    {/* Heading */}
                    <h1 className="text-2xl font-bold my-12 text-[#08183A]">Welcome Admin</h1>
                    {/* Two Boxes */}
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
                        <div className="w-full lg:w-1/2 p-4 bg-white shadow-lg rounded-lg flex justify-between items-center">
                            <div>
                                <h2 className="text-[#08183A] text-2xl font-semibold">Students</h2>
                                <p className="text-2xl text-[#08183A] font-bold">550</p>
                            </div>
                            <img src="/img/reading-book (1).svg" alt="Student Icon" className="w-16 h-16" />
                        </div>
                        <div className="w-full lg:w-1/2 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl text-[#08183A] font-semibold">Teacher</h2>
                                <p className="text-2xl text-[#08183A] font-bold">20</p>
                            </div>
                            <img src="/img/school (1).svg" alt="Teacher Icon" className="w-16 h-16" />
                        </div>
                    </div>
                    {/* Images in a Row */}
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
                        <img src="img/analytics.svg" alt="Image 1" className="w-full lg:w-1/2 rounded-md" />
                        <img src="img/Graphical.svg" alt="Image 2" className="w-full lg:w-1/2 rounded-md" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
