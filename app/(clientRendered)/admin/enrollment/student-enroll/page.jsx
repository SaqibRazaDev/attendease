"use client";
import React, { useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../config/firebase'; // Import Firestore
import Header from '@/app/(Components)/header/header';
import SideBar from '@/app/(Components)/side-bar/side-bar-admin';
import { BsPersonFillAdd } from "react-icons/bs";

const EnrollStudentPage = () => {
    const [studentData, setStudentData] = useState({
        studentName: '',
        fatherName: '',
        className: '',
        cnic: '',
        studentEmail: '',
        studentContact: '',
        studentPassword: '',
        dateOfBirth: '',
        gender: '',
        homeAddress: '',
        nationality: '',
        religion: '',
        bloodGroup: '',
    });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { cnic, studentContact } = studentData;

        // Validate CNIC length (without dashes, should be exactly 13 digits)
        if (cnic.replace(/-/g, '').length !== 13) {
            setMessage("CNIC must be exactly 13 digits long.");
            setIsSuccess(false);
            clearMessageAfterTimeout();  // Clear message after 3 seconds
            return; // Prevent form submission
        }

        // Validate contact number length (should be exactly 11 digits)
        if (studentContact.length !== 11) {
            setMessage("Contact number must be exactly 11 digits long.");
            setIsSuccess(false);
            clearMessageAfterTimeout();  // Clear message after 3 seconds
            return; // Prevent form submission
        }

        try {
            // Check if student already exists
            const userDoc = await getDoc(doc(db, "EnrolledStudents", cnic.replace(/-/g, '')));

            if (userDoc.exists()) {
                setMessage("Student already exists!");
                setIsSuccess(false);
                clearMessageAfterTimeout();  // Clear message after 3 seconds
                return;
            }

            // Enroll new student
            await setDoc(doc(db, "EnrolledStudents", cnic.replace(/-/g, '')), studentData);

            setMessage("Student enrolled successfully!");
            setIsSuccess(true);
            clearMessageAfterTimeout();

            // Reset form
            setStudentData({
                studentName: '',
                fatherName: '',
                className: '',
                cnic: '',
                studentEmail: '',
                studentContact: '',
                studentPassword: '',
                dateOfBirth: '',
                gender: '',
                homeAddress: '',
                nationality: '',
                religion: '',
                bloodGroup: '',
            });
        } catch (error) {
            console.error("Error enrolling student: ", error);
            setMessage("Error occurred while enrolling the student.");
            setIsSuccess(false);
            clearMessageAfterTimeout();
        }
    };

    const clearMessageAfterTimeout = () => {
        setTimeout(() => {
            setMessage('');
        }, 3000); // 3 seconds
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    };

    const formatCnic = (value) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length <= 13) {
            const formattedCnic = digits.replace(/^(\d{5})(\d{7})(\d{1})$/, '$1-$2-$3');
            return formattedCnic.length > 15 ? formattedCnic.slice(0, 15) : formattedCnic;
        }
        return value;
    };

    const handleCnicChange = (e) => {
        const formattedValue = formatCnic(e.target.value);
        handleChange({ target: { name: 'cnic', value: formattedValue } });
    };

    const handleContactChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 11);
        handleChange({ target: { name: 'studentContact', value } });
    };

    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            <Header />
            <main className="flex flex-col lg:flex-row min-h-screen">
                <SideBar />
                <div className="flex-1 p-4 flex flex-col mt-10 lg:mt-0 lg:h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-[#08183A]">Enroll Student</h1>
                    </div>

                    {message && (
                        <div className={`flex items-center justify-center w-full h-12 mb-4 rounded-lg text-white ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
                            <span>{message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full p-6 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="studentName" className="input-label">Student Name:</label>
                            <input
                                type="text"
                                id="studentName"
                                className="input-field"
                                value={studentData.studentName}
                                onChange={handleChange}
                                name="studentName"
                                placeholder="Enter student name"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="fatherName" className="input-label">Father Name:</label>
                            <input
                                type="text"
                                id="fatherName"
                                className="input-field"
                                value={studentData.fatherName}
                                onChange={handleChange}
                                name="fatherName"
                                placeholder="Enter father name"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="className" className="input-label">Class Name:</label>
                            <input
                                type="text"
                                id="className"
                                className="input-field"
                                value={studentData.className}
                                onChange={handleChange}
                                name="className"
                                placeholder="Enter class name"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="cnic" className="input-label">CNIC:</label>
                            <input
                                type="text"
                                id="cnic"
                                className="input-field"
                                value={studentData.cnic}
                                onChange={handleCnicChange}
                                name="cnic"
                                placeholder="Enter CNIC"
                                maxLength={15}
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="studentEmail" className="input-label">Student Email:</label>
                            <input
                                type="email"
                                id="studentEmail"
                                className="input-field"
                                value={studentData.studentEmail}
                                onChange={handleChange}
                                name="studentEmail"
                                placeholder="Enter student email"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="studentContact" className="input-label">Student Contact:</label>
                            <input
                                type="tel"
                                id="studentContact"
                                className="input-field"
                                value={studentData.studentContact}
                                onChange={handleContactChange}
                                name="studentContact"
                                placeholder="Enter student contact"
                                maxLength={11}
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="dateOfBirth" className="input-label">Date of Birth:</label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                className="input-field"
                                value={studentData.dateOfBirth}
                                onChange={handleChange}
                                name="dateOfBirth"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="gender" className="input-label">Gender:</label>
                            <select
                                id="gender"
                                className="input-field"
                                value={studentData.gender}
                                onChange={handleChange}
                                name="gender"
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="homeAddress" className="input-label">Home Address:</label>
                            <input
                                type="text"
                                id="homeAddress"
                                className="input-field"
                                value={studentData.homeAddress}
                                onChange={handleChange}
                                name="homeAddress"
                                placeholder="Enter home address"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="nationality" className="input-label">Nationality:</label>
                            <input
                                type="text"
                                id="nationality"
                                className="input-field"
                                value={studentData.nationality}
                                onChange={handleChange}
                                name="nationality"
                                placeholder="Enter nationality"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="religion" className="input-label">Religion:</label>
                            <input
                                type="text"
                                id="religion"
                                className="input-field"
                                value={studentData.religion}
                                onChange={handleChange}
                                name="religion"
                                placeholder="Enter religion"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="bloodGroup" className="input-label">Blood Group:</label>
                            <input
                                type="text"
                                id="bloodGroup"
                                className="input-field"
                                value={studentData.bloodGroup}
                                onChange={handleChange}
                                name="bloodGroup"
                                placeholder="Enter blood group"
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

export default EnrollStudentPage;
