import React from 'react'

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
        <button className="w-full lg:w-72 h-9 bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
          <img src="/img/reading-book (1).svg" alt="Student Icon" className="w-6 h-6" />
          <span>Student</span>
        </button>
        <button className="w-full lg:w-72 h-9  bg-[#F2BA1D] text-[#08183A] flex items-center justify-center space-x-2 rounded">
          <img src="/img/school (1).svg" alt="Teacher Icon" className="w-6 h-6" />
          <span>Teacher</span>
        </button>

      </div>
    </div>

    {/* Right Container */}
    <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
      {/* Heading and Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <h1 className="text-2xl font-bold text-[#08183A]">Total students:</h1>
        <button className="w-full sm:w-48 h-12 text-xl border border-black text-[#08183A] flex items-center justify-center space-x-2 rounded">
          <img src="/img/add 1.svg" alt="Add Icon" className="w-9 h-9" />
          <span>Enroll Student</span>
        </button>
      </div>
      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 font-bold text-left">Sr. No</th>
              <th className="py-2 px-4 font-bold text-left">Student Name</th>
              <th className="py-2 px-4 font-bold text-left">Email</th>
              <th className="py-2 px-4 font-bold text-left">Class Name</th>
              <th className="py-2 px-4 font-bold text-left">CNIC</th>
              <th className="py-2 px-4 font-bold text-left">Contact</th>
              <th className="py-2 px-4 font-bold text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* Example rows */}
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">2</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">3</td>
              <td className="py-2 px-4">Jane Smith</td>
              <td className="py-2 px-4">jane.smith@example.com</td>
              <td className="py-2 px-4">9th Grade</td>
              <td className="py-2 px-4">12345-6789012-4</td>
              <td className="py-2 px-4">098-765-4321</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">4</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">5</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">6</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">7</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">8</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">9</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            <tr className="bg-white shadow-md mb-2">
              <td className="py-2 px-4">10</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john.doe@example.com</td>
              <td className="py-2 px-4">10th Grade</td>
              <td className="py-2 px-4">12345-6789012-3</td>
              <td className="py-2 px-4">123-456-7890</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-[#F2BA1D] text-[#08183A] py-1 px-3 rounded">Edit</button>
              </td>
            </tr>
            {/* Additional rows... */}
          </tbody>
        </table>
      </div>
    </div>
  </main>
</div>

  )
}

export default page