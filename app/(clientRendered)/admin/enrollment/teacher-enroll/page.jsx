"use client";
import React, { useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../config/firebase'; // Import Firestore
import Header from '@/app/(Components)/header/header';
import SideBar from '@/app/(Components)/side-bar/side-bar-admin';
import { BsPersonFillAdd } from "react-icons/bs";

const EnrollTeacherPage = () => {
    const [teacherName, setTeacherName] = useState('');
    const [cnic, setCnic] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [noOfPeriod, setNoOfPeriod] = useState('');
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherContact, setTeacherContact] = useState('');
    const [teacherPassword, setTeacherPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate CNIC length (without dashes, should be exactly 13 digits)
        if (cnic.replace(/-/g, '').length !== 13) {
            setMessage("CNIC must be exactly 13 digits long.");
            setIsSuccess(false);
            clearMessageAfterTimeout();  // Clear message after 3 seconds
            return; // Prevent form submission
        }

        // Validate contact number length (should be exactly 11 digits)
        if (teacherContact.length !== 11) {
            setMessage("Contact number must be exactly 11 digits long.");
            setIsSuccess(false);
            clearMessageAfterTimeout();  // Clear message after 3 seconds
            return; // Prevent form submission
        }

        try {
            // Check if teacher already exists
            const teacherDoc = await getDoc(doc(db, "EnrolledTeachers", cnic.replace(/-/g, ''))); // Remove dashes for checking

            if (teacherDoc.exists()) {
                setMessage("Teacher already exists!");
                setIsSuccess(false);
                clearMessageAfterTimeout();  // Clear message after 3 seconds
                return; // Stop the submission if teacher exists
            }

            // Add new teacher if not exists
            await setDoc(doc(db, "EnrolledTeachers", cnic.replace(/-/g, '')), {
                teacherName,
                cnic,
                subjectName,
                noOfPeriod,
                teacherEmail,
                teacherContact,
                teacherPassword,
            });

            setMessage("Teacher enrolled successfully!");
            setIsSuccess(true);
            clearMessageAfterTimeout();  // Clear message after 3 seconds

            // Clear form fields
            setTeacherName('');
            setCnic('');
            setSubjectName('');
            setNoOfPeriod('');
            setTeacherEmail('');
            setTeacherContact('');
            setTeacherPassword('');
        } catch (error) {
            console.error("Error enrolling teacher: ", error);
            setMessage("Error occurred while submitting the form.");
            setIsSuccess(false);
            clearMessageAfterTimeout();  // Clear message after 3 seconds
        }
    };

    // Function to clear message after 3 seconds
    const clearMessageAfterTimeout = () => {
        setTimeout(() => {
            setMessage('');
        }, 3000); // 3 seconds
    };

    const formatCnic = (value) => {
        // Remove all non-digit characters
        const digits = value.replace(/\D/g, '');
        // Limit to 13 digits and format according to the CNIC format
        if (digits.length <= 15) {
            const formattedCnic = digits.replace(/^(\d{5})(\d{7})(\d{1})$/, '$1-$2-$3');
            return formattedCnic.length > 15 ? formattedCnic.slice(0, 15) : formattedCnic;
        }
        return value;
    };

    const handleCnicChange = (e) => {
        const formattedValue = formatCnic(e.target.value);
        setCnic(formattedValue);
    };

    const handleContactChange = (e) => {
        // Limit contact to 11 digits
        const value = e.target.value.replace(/\D/g, '').slice(0, 11);
        setTeacherContact(value);
    };

    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            <Header />
            <main className="flex flex-col lg:flex-row min-h-screen">
                <SideBar />
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-[#08183A]">Enroll Teacher</h1>
                    </div>

                    {message && (
                        <div className={`flex items-center justify-center w-full h-12 mb-4 rounded-lg text-white ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
                            <span>{message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full p-6 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="teacherName" className="input-label">Teacher Name:</label>
                            <input
                                type="text"
                                id="teacherName"
                                className="input-field"
                                value={teacherName}
                                onChange={(e) => setTeacherName(e.target.value)}
                                placeholder="Enter teacher name"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="cnic" className="input-label">CNIC:</label>
                            <input
                                type="text"
                                id="cnic"
                                className="input-field"
                                value={cnic}
                                onChange={handleCnicChange}
                                placeholder="Enter CNIC"
                                maxLength={15} // Maximum length of 15 characters (including dashes)
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="subjectName" className="input-label">Subject Name:</label>
                            <input
                                type="text"
                                id="subjectName"
                                className="input-field"
                                value={subjectName}
                                onChange={(e) => setSubjectName(e.target.value)}
                                placeholder="Enter subject name"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="noOfPeriod" className="input-label">No of Periods:</label>
                            <input
                                type="number"
                                id="noOfPeriod"
                                className="input-field"
                                value={noOfPeriod}
                                onChange={(e) => setNoOfPeriod(e.target.value)}
                                placeholder="Enter number of periods"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="teacherEmail" className="input-label">Teacher Email:</label>
                            <input
                                type="email"
                                id="teacherEmail"
                                className="input-field"
                                value={teacherEmail}
                                onChange={(e) => setTeacherEmail(e.target.value)}
                                placeholder="Enter teacher email"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="teacherContact" className="input-label">Teacher Contact:</label>
                            <input
                                type="tel"
                                id="teacherContact"
                                className="input-field"
                                value={teacherContact}
                                onChange={handleContactChange}
                                placeholder="Enter teacher contact"
                                maxLength={11} // Maximum length of 11 characters
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="teacherPassword" className="input-label">Create Password:</label>
                            <input
                                type="password"
                                id="teacherPassword"
                                className="input-field"
                                value={teacherPassword}
                                onChange={(e) => setTeacherPassword(e.target.value)}
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <div className="flex justify-center mt-4 lg:mt-0">
                            <button
                                type="submit"
                                className="w-full btn-cus h-12 mt-8 text-xl border border-black text-[#08183A] flex items-center justify-center space-x-2 rounded hover:bg-slate-200"
                            >
                                <BsPersonFillAdd className='w-7 h-7' />
                                <span>Enroll Now</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default EnrollTeacherPage;
