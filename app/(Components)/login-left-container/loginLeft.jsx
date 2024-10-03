import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function LoginLeft(props) {
    return (
        <>
            <div className="w-full md:w-1/3 bg-[#08183A] flex flex-col items-center justify-between p-4">
                <div className="w-full flex justify-center p-4">
                    <Link href="/">
                        <button className="text-white">
                            <Image src="assets/left-arrow.svg" width={12} height={12} className="w-12 h-12" alt="Back Arrow" />
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <Image src="assets/logo-white.svg" alt="Logo" width={80} height={64} className="h-16 w-20" />
                    <p className="text-white mt-4 text-center text-4xl font-semibold">ATTENDEASE</p>
                    <p className="text-white mt-6 text-center text-xl">{props.title}</p>
                </div>
            </div>

        </>
    )
}

export default LoginLeft
