import React from 'react';
import Link from 'next/link';
import LoginLeft from '../../(Components)/login-left-container/loginLeft';

const TeacherLoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="flex flex-col md:flex-row w-full h-screen">
                {/* Left Container */}
                <LoginLeft title="Teacher login" />
                {/* Right Container */}
                <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white">
                    <h1 className="text-3xl text-[#08183A] font-semibold mb-6">Log In</h1>
                    <input
                        type="text"
                        placeholder="Teacher ID"
                        className="mb-4 p-2 border border-[#08183A] text-[#08183A] placeholder-[#08183A] rounded w-full max-w-xs"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="mb-4 p-2 border border-[#08183A] text-[#08183A] placeholder-[#08183A] rounded w-full max-w-xs"
                    />
                    {/* Condition login missing */}
                    <Link href="/teacher/tcard" className='w-full text-center'>
                        <button className="bg-[#F2BA1D] text-[#08183A] p-2 text-center w-full max-w-xs rounded">Log In</button>
                    </Link>

                    <p className="text-base py-8">New user ? <Link href="/enrollment/student-enroll" className='font-bold'>Enroll Now</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default TeacherLoginPage;
