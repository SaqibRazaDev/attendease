
'use client'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import logo from '../../../../public/assets/logo-full.svg'
import profile from '../../../../public/assets/user-profile.svg';
import SideBar from '../../../(Components)/side-bar/side-bar-student';

const StudentDash = () => {

    const value = useSelector((state) => state.counter.value)

    const name = useSelector((state) => state.student.studentName)


    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            {/* Header */}
            <header>
                <nav className="bg-white shadow-lg p-4">
                    <div className="container mx-auto flex flex-wrap justify-between items-center">
                        {/* Left side: Logo */}
                        <div className="flex items-center">
                            <Image src={logo} alt="Logo" width={208} height={40} className="h-10 w-52 mr-3" />
                        </div>
                        {/* Right side: Profile icon and admin name */}
                        <div className="flex items-center mt-4 sm:mt-0">
                            <Image src={profile} alt="Profile Icon" width={144} height={48}  className="h-12 w-36 rounded-full mr-2" />
                        </div>
                    </div>
                </nav>
            </header>
            {/* Main Section */}
            <main className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Container */}
                <SideBar/>
                {/* Right Container */}
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-14 lg:h-screen overflow-y-auto">
                    {/* Heading */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#08183A]">Student Details</h1>
                        <p>Value = {value}</p>
                    </div>
                    {/* Flex Container for Cards */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
                        {/* Student Card */}
                        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex-shrink-0 flex flex-col w-full lg:w-[650px] h-auto lg:h-[450px]">
                            <div className="flex flex-col lg:flex-row mb-4">
                                <Image src="assets/Rectangle 32.svg" width={192} height={192} alt="Student Photo" className="h-48 w-48 lg:h-72 lg:w-60 rounded-md mr-8 border border-black" />
                                <div className="flex flex-col justify-center space-y-4 mt-4 lg:mt-0">
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-lg text-[#08183A] w-40">Student Name:</p>
                                        <p className="ml-8 text-sm">{name}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-lg text-[#08183A] w-40">Gender:</p>
                                        <p className="ml-8 text-sm">Male</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">Class:</p>
                                        <p className="ml-8 text-sm">10th Grade</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">CNIC:</p>
                                        <p className="ml-8 text-sm">12345-6789012-3</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">Roll No:</p>
                                        <p className="ml-8 text-sm">123</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <p className="font-bold text-[#08183A] text-lg w-40">Admission Date:</p>
                                        <p className="ml-8 text-sm">2020-01-01</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4 space-x-4">
                                <button className="border border-[#08183A] w-14 h-14 text-white px-4 py-2 rounded">
                                    <Image src="assets/printer.svg" width={36} height={36} className="w-9 h-9" alt="" />
                                </button>
                                <button className="border border-[#08183A] w-14 h-14 text-white px-4 py-2 rounded">
                                    <Image src="assets/download.svg" width={36} height={36} className="w-9 h-9" alt="" />
                                </button>
                            </div>
                        </div>
                        {/* Progress Cards */}
                        <div className="flex flex-col gap-6 w-full lg:w-auto">
                            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center h-36 w-72">
                                <div>
                                    <p className="font-bold text-2xl text-[#08183A]">Attendance Progress</p>
                                    <p className="text-2xl font-bold text-[#08183A]">80.2%</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center h-36 w-72">
                                <div>
                                    <p className="font-bold text-2xl text-[#08183A]">Result Progress</p>
                                    <p className="text-2xl font-bold text-[#08183A]">80%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDash;
