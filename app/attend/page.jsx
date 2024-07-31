import React from 'react'

function page() {
  return (
    <div > <div className="min-h-screen bg-[#F2F2F2]">
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
                <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] focus:bg-white text-[#08183A] flex items-center justify-center space-x-2 rounded">
                    <img src="/img/calendar (1).svg" alt="Student Icon" className="w-6 h-6" />
                    <span>Attendance</span>
                </button>
                <button className="w-full lg:w-72 h-9 focus:bg-white bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
                    <img src="/img/report-card (1).svg" alt="Teacher Icon" className="w-6 h-6" />
                    <span>Report Card</span>
                </button>
            </div>
        </div>

        {/* Right Container */}
        <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
            {/* Heading and Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mb-6">
                <h1 className="text-2xl font-bold text-[#08183A] mb-4 sm:mb-0">Attendance Records</h1>
                <div className="flex space-x-4">
                    <button className="text-xl border border-[#08183A] text-[#08183A] px-4 py-2 rounded flex items-center space-x-2">
                        <img src="img/down 1.svg" alt="Download Icon" className="w-5 h-5" />
                        <span>Weekly Attendance</span>
                    </button>
                    <button className="text-xl border border-[#08183A] text-[#08183A] px-4 py-2 rounded flex items-center space-x-2">
                        <img src="img/down 1.svg" alt="Print Icon" className="w-5 h-5" />
                        <span>Subject</span>
                    </button>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg">
                    <thead className="bg-[#08183A] text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">Roll No</th>
                            <th className="py-2 px-4 text-left">Date</th>
                            <th className="py-2 px-4 text-left">Present</th>
                            <th className="py-2 px-4 text-left">Absent</th>
                            <th className="py-2 px-4 text-left">Leave</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr>
                            <td className="border-t py-2 px-4">123</td>
                            <td className="border-t py-2 px-4">2024-07-01</td>
                            <td className="border-t py-2 px-4">Yes</td>
                            <td className="border-t py-2 px-4">No</td>
                            <td className="border-t py-2 px-4">No</td>
                        </tr>
                        <tr>
                            <td className="border-t py-2 px-4">124</td>
                            <td className="border-t py-2 px-4">2024-07-01</td>
                            <td className="border-t py-2 px-4">No</td>
                            <td className="border-t py-2 px-4">Yes</td>
                            <td className="border-t py-2 px-4">No</td>
                        </tr>
                        <tr>
                            <td className="border-t py-2 px-4">125</td>
                            <td className="border-t py-2 px-4">2024-07-01</td>
                            <td className="border-t py-2 px-4">No</td>
                            <td className="border-t py-2 px-4">No</td>
                            <td className="border-t py-2 px-4">Yes</td>
                        </tr>
                        {/* More rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</div>

 </div>
  )
}

export default page