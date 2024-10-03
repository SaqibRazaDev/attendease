import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/logo-full.svg'
import { BsPersonCircle } from "react-icons/bs";

function Header() {
    return (
        <>

            <div className="container px-20 py-4 mb-1 flex flex-wrap justify-between items-center shadow-md">
                {/* Left side: Logo */}
                <div className="">
                    <Image src={logo} width={228} height={40} alt="Logo" className="h-10 mr-3" />
                </div>
                {/* Right side: Profile icon and admin name */}
                <div className="flex items-center gap-4">
                    <BsPersonCircle className='w-8 h-8'/>
                    <p className="person-name">User Name</p>
                </div>
            </div>

        </>
    )
}

export default Header
