import React from 'react';

const App = () => {
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
            <h1 className="text-2xl font-bold text-[#08183A]">Teacher Details</h1>
          </div>
          {/* Flex Container for Cards */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
            {/* Student Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex-shrink-0 flex flex-col w-full lg:w-[576px] h-auto">
              <div className="flex flex-col lg:flex-row mb-4">
                <img src="img/Rectangle 32.svg" alt="Student Photo" className="h-[256px] w-[205.7px] rounded-md mb-4 lg:mb-0 lg:mr-8 border border-black mx-auto lg:mx-0" />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                    <p className="font-bold text-lg text-[#08183A] sm:w-40">Name:</p>
                    <p className="sm:ml-8 text-sm">John Doe</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                    <p className="font-bold text-lg text-[#08183A] sm:w-40">Gender:</p>
                    <p className="sm:ml-8 text-sm">Male</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                    <p className="font-bold text-[#08183A] text-lg sm:w-40">Class:</p>
                    <p className="sm:ml-8 text-sm">10th Grade</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                    <p className="font-bold text-[#08183A] text-lg sm:w-40">CNIC:</p>
                    <p className="sm:ml-8 text-sm">12345-6789012-3</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                    <p className="font-bold text-[#08183A] text-lg sm:w-40">Subject:</p>
                    <p className="sm:ml-8 text-sm">Chemistry</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                    <p className="font-bold text-[#08183A] text-lg sm:w-40">Lecture:</p>
                    <p className="sm:ml-8 text-sm">2</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 flex flex-col w-full lg:w-[364px] h-auto">
              <div className="flex mb-4">
                <p className="font-bold text-lg text-[#08183A]">Mark Attendance</p>
              </div>
              <div className="flex justify-center items-center bg-[#ECECEC] border border-black w-[208px] h-[204px] mx-auto">
                <img src="img/available 1.svg" alt="Image" className="h-[176px] w-[176px]" />
              </div>
              <div className="flex justify-center mt-4">
                <button className="border border-[#08183A] w-40 h-10 text-[#08183A] rounded flex justify-center items-center">
                  <img src="img/user (1) 1.svg" className="w-[26.67px] h-[26.67px]" alt="Icon" />
                  <span className="ml-2">Mark</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
