"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import { IoExit } from "react-icons/io5";

function SideBar() {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(true); 

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`bg-[#08183A] px-4 flex flex-col lg:h-screen ${isExpanded ? 'w-[300px]' : 'w-[112px]'} transition-all duration-300`}>
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
                    <button className="side-bar-btn flex items-center" onClick={() => router.push('/teacher/tcard')} >
                        <MdSpaceDashboard className="w-6 h-6" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Dashboard</span>
                    </button>
                    <button className="side-bar-btn flex items-center" onClick={() => router.push('/attendance')}>
                        <FaCalendarCheck className="w-5 h-5" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Students Attendance</span>
                    </button>
                    <button className="side-bar-btn flex items-center">
                        <PiFilesFill className="w-6 h-6" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Report Card</span>
                    </button>
                    <button className="side-bar-btn flex items-center">
                        <IoExit className="w-6 h-6" />
                        <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>Apply For Leave</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default SideBar;