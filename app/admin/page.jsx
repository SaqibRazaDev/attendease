import React from 'react'

function page() {
  return (
    <div > <div className="flex items-center justify-center min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="flex flex-col md:flex-row w-full h-screen">
        {/* Left Container */}
        <div className="w-full md:w-1/3 bg-[#08183A] flex flex-col items-center justify-between p-4">
            <div className="w-full flex justify-center p-4">
                <button className="text-white">
                    <img src="img/left-arrow (1) 1.svg" className="h-12 w-12" alt="Back Arrow" />
                </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <img src="img/logo (1).svg" alt="Logo" className="h-16 w-20" />
                <p className="text-white mt-4 text-center text-4xl font-semibold">ATTENDEASE</p>
                <p className="text-white mt-6 text-center text-xl">Admin login</p>
            </div>
        </div>
        {/* Right Container */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white">
            <h1 className="text-3xl text-[#08183A] font-semibold mb-6">Log In</h1>
            <input 
                type="text" 
                placeholder="Admin ID"
                className="mb-4 p-2 border border-[#08183A] text-[#08183A] placeholder-[#08183A] rounded w-full max-w-xs" 
            />
            <input 
                type="password" 
                placeholder="Password"
                className="mb-4 p-2 border border-[#08183A] text-[#08183A] placeholder-[#08183A] rounded w-full max-w-xs" 
            />
            <button className="bg-[#F2BA1D] text-[#08183A] py-2 w-full max-w-xs rounded">Log In</button>
        </div>
    </div>
</div>
 </div>
  )
}

export default page