"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";

function SideBar() {
    const router = useRouter();

    const [isExpanded, setIsExpanded] = useState(true); 

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`bg-[#08183A] px-4 flex flex-col h-full min-h-screen ${isExpanded ? 'w-[300px]' : 'w-[112px]'} transition-all duration-300`}>
                {/* Arrow Icon for toggling sidebar */}
                <div className="flex justify-center my-6  cursor-pointer" onClick={toggleSidebar}>
                    {isExpanded ? (
                        <FaArrowLeft className="w-6 h-6 text-yellow-500" />
                    ) : (
                        <FaArrowRight className="w-6 h-6 text-yellow-500" />
                    )}
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col gap-4">
                    <button className="side-bar-btn flex items-center" onClick={() => router.push('/admin/0')} >
                        <MdSpaceDashboard className="w-6 h-6" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Dashboard</span>
                    </button>
                    <button className="side-bar-btn flex items-center" onClick={() => router.push('/admin/student-list')}>
                        <FaCalendarCheck className="w-5 h-5" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Students</span>
                    </button>
                    <button className="side-bar-btn flex items-center" onClick={() => router.push('/admin/teacher-list')}>
                        <PiFilesFill className="w-6 h-6" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Teachers</span>
                    </button>
                    {/* <button className="side-bar-btn flex items-center" onClick={() => router.push('')}>
                        <IoExit className="w-6 h-6" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Apply For Leave</span>
                    </button> */}
                </div>
            </div>
        </>
    );
}

export default SideBar;