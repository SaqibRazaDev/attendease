'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'; // Import useRouter
import { fetchStudentDetails, resetStudentDetails } from '../../../store/slices/studentDetailsSlice';
import Image from 'next/image'
import Link from 'next/link';
import LoginLeft from '../../(Components)/login-left-container/loginLeft';

const StudentLoginPage = () => {




    const [cnic, setCnic] = useState('');
    const [error, setError] = useState(''); // State to handle error messages
    const dispatch = useDispatch();
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cnic.length !== 13) {
            setError('CNIC must be exactly 13 digits');
            return;
        }

        setError(''); // Clear any previous errors if the input is valid

        if (cnic) {
            dispatch(fetchStudentDetails(cnic))
                .unwrap() // Allows handling of fulfilled/rejected states
                .then(() => {
                    // Push to /student/0 if the fetch was successful
                    router.push('/student/0');
                })
                .catch((error) => {
                    console.error('Failed to fetch student details: ', error);
                    // You can also handle any additional error state here
                });
        }
    };






    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col md:flex-row w-full h-screen">
                {/* Left Container */}
                <LoginLeft title="Student login" />

                {/* Right Container */}
                <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white">
                    <h1 className="text-3xl text-[#08183A] font-semibold mb-6">Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={cnic}
                            onChange={(e) => setCnic(e.target.value)}
                            placeholder="Enter CNIC"
                            maxLength={13}
                            className="mb-4 p-2 bg-transparent border border-[#08183A] text-[#08183A] placeholder-[#08183A] rounded w-full max-w-xs"
                            required
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

                        <button
                            className="bg-[#F2BA1D] text-[#08183A] p-2 text-center w-full max-w-xs rounded"
                            type="submit">Fetch Details
                        </button>

                    </form>

                    <p className="text-base py-8">New user ? <Link href="/enrollment/student-enroll" className='font-bold'>Enroll Now</Link></p>


                </div>
                {/* Condition login missing */}
                {/* <Link href="/student/0" className='w-full text-center'>
                        <button className="bg-[#F2BA1D] text-[#08183A] p-2 text-center w-full max-w-xs rounded">Log In</button>
                    </Link> */}



            </div>
        </div>

    );
};

export default StudentLoginPage;
