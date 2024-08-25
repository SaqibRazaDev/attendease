import React from 'react';

function page() {
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
            <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] focus:bg-white text-[#08183A] flex items-center justify-center space-x-2 rounded">
              <img src="/img/calendar (1).svg" alt="Attendance Icon" className="w-6 h-6" />
              <span>Attendance</span>
            </button>
            <button className="w-full lg:w-72 h-9 focus:bg-white bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
              <img src="/img/report-card (1).svg" alt="Report Card Icon" className="w-6 h-6" />
              <span>Report Card</span>
            </button>
            <button className="w-full lg:w-72 h-9 focus:bg-white bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
              <img src="/img/report-card (1) (1).svg" alt="Apply For Leave Icon" className="w-6 h-6" />
              <span>Apply For Leave</span>
            </button>
          </div>
        </div>
        {/* Right Container */}
        <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
          {/* Heading and Leave Application Box */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-[#08183A] mb-8">Apply for Leave</h1>
            <div className="bg-white shadow-lg rounded-lg w-[56rem] h-[42rem] flex items-center justify-center">
              <div className="bg-[#F2F2F2] shadow-inner rounded-lg w-[320px] h-[320px] flex flex-col items-center justify-center">
                <img src="img/folder 1 (1).svg" alt="Upload Icon" className="w-[144px] h-[144px] mb-4" />
                <span className="text-[#08183A]">Choose File</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
