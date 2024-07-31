import React from 'react'

export default function page() {
  return (
    <div >
       <div class="container mx-auto flex flex-col justify-center items-center mt-10 px-4 space-y-10 ">
            <div class="text-center">
                <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-extrabold text-[#08183A]">
                    ATTENDEASE</p>
                <div class="flex flex-col items-center mt-5 space-y-16">
                    <div class="flex justify-center space-x-5">
                        <div class="w-3 h-3 bg-[#08183A] rounded-full"></div>
                        <div class="w-3 h-3 bg-[#F2BA1D] rounded-full"></div>
                        <div class="w-3 h-3 bg-[#08183A] rounded-full"></div>
                        <div class="w-3 h-3 bg-[#F2BA1D] rounded-full"></div>
                    </div>
                    
                </div>
            </div>
        <button
          class="   px-28 py-2 text-3xl font-semibold   border-2 border-[#F2BA1D] rounded-3xl flex items-center justify-center my-32"><a
            href="#" class="  text-[#08183A]  "></a>Log in as</button>
        <div class="flex flex-wrap justify-center items-center pt-20 space-y-10 gap-10 sm:space-x-10 sm:space-y-0 lg:space-x-20 lg:pt-20">
          <div class="flex flex-col items-center">
            <div class="w-36 h-28 sm:w-44 sm:h-32 lg:w-48 lg:h-36 rounded-md bg-[#08183A] flex items-center justify-center border-2 border-[#F2BA1D]">
            </div>
            <p class="mt-2 text-center text-[#08183A] text-xl font-semibold">Student</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-36 h-28 sm:w-44 sm:h-32 lg:w-48 lg:h-36 rounded-md bg-[#08183A] flex items-center justify-center border-2 border-[#F2BA1D]">
            </div>
            <p class="mt-2 text-center text-[#08183A] text-xl font-semibold">Teacher</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-36 h-28 sm:w-44 sm:h-32 lg:w-48 lg:h-36 rounded-md bg-[#08183A] flex items-center justify-center border-2 border-[#F2BA1D]">
            </div>
            <p class="mt-2 text-center text-[#08183A] text-xl font-semibold">Admin</p>
          </div>
        </div>


    </div>
    </div>
  )
}
