'use client'
import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Header from '@/app/(Components)/header/header';
import SideBar from '@/app/(Components)/side-bar/side-bar-admin';
import TotalStudents from '@/app/(Components)/total-students/total-students';
import TotalTeachers from '@/app/(Components)/total-teachers/total-teachers';

const AdminDash = () => {


    const router = useRouter();


    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            {/* Header start here */}
            <Header />
            {/* Main Section */}
            <main className="flex flex-col lg:flex-row min-h-full">
                {/* Left Container */}

                <SideBar />

                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col">
                    {/* Heading */}
                    <h1 className="text-2xl font-bold my-12 text-[#08183A]">Welcome Admin</h1>
                    {/* Two Boxes */}
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
                        <div
                            className="w-full lg:w-1/2 p-4 bg-white shadow-lg rounded-lg flex justify-between items-center"
                            onClick={() => router.push('/admin/student-list')}
                        >
                            <div>
                                <h2 className="text-[#08183A] text-2xl font-semibold">Students</h2>
                                <p className="text-xl text-[#08183A] font-light">Total Students = <TotalStudents /></p>
                            </div>
                            <Image src="/assets/reading-book-01.svg" width={64} height={64} alt="Student Icon" className="w-16 h-16" />
                        </div>
                        <div
                            className="w-full lg:w-1/2 p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
                            onClick={() => router.push('/admin/teacher-list')}
                        >
                            <div>
                                <h2 className="text-2xl text-[#08183A] font-semibold">Teacher</h2>
                                <p className="text-xl text-[#08183A] font-light">Total Teachers = <TotalTeachers /></p>
                            </div>
                            <Image src="/assets/school (1).svg" width={64} height={64} alt="Teacher Icon" className="w-16 h-16" />
                        </div>
                    </div>
                    {/* Images in a Row */}
                    <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
                        <Image src="/assets/analytics.svg" width={64} height={64} alt="Image 1" className="w-full rounded-md" />
                        <Image src="/assets/Graphical.svg" width={64} height={64} alt="Image 2" className="w-full rounded-md" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDash;
