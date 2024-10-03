"use client";
import React, { useState } from 'react';
import Header from '@/app/(Components)/header/header';
import SideBar from '@/app/(Components)/side-bar/side-bar-admin';
import { BsPersonFillAdd } from "react-icons/bs";

function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header start here */}
      <Header/>

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Container */}
        
        <SideBar/>

        {/* Right Container */}
        <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
          {/* Heading and Button */}
          <div className="flex justify-between items-center my-4">
            <h1 className="text-2xl font-bold text-[#08183A]">Total students:</h1>
            <button className="w-48 h-10 text-base border border-black text-[#08183A] flex items-center justify-center gap-2 rounded">
             <BsPersonFillAdd className='w-7 h-7' />
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
                {/* Additional rows... */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
