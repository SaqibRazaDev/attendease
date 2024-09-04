import Image from 'next/image'

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="h-[831px]">
      <section>
        <div className="container mx-auto flex flex-col justify-center items-center mt-10 px-4 space-y-10">
          <div className="text-center">
            <Image src="/img/logo.svg" className="mb-4 w-32 h-24 mx-auto" alt="" width={128} height={96} />
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#08183A]">ATTENDEASE</p>
            <div className="flex flex-col items-center mt-5 space-y-16">
              <div className="flex justify-center space-x-5">
                <div className="w-3 h-3 bg-[#08183A] rounded-full"></div>
                <div className="w-3 h-3 bg-[#F2BA1D] rounded-full"></div>
                <div className="w-3 h-3 bg-[#08183A] rounded-full"></div>
                <div className="w-3 h-3 bg-[#F2BA1D] rounded-full"></div>
              </div>
              <button className="px-28 py-2 text-3xl font-semibold border-2 border-[#F2BA1D] rounded-3xl flex items-center justify-center my-32">
                <a href="#" className="text-[#08183A]">Log in as</a>
              </button>
            </div>
          </div>
          {/* New Container with Three Boxes */}
          <a href="http://localhost:3000/student">
          <div className="flex flex-wrap justify-center items-center pt-20 space-y-10 gap-10 sm:space-x-10 sm:space-y-0 lg:space-x-20 lg:pt-20">
            <div className="flex flex-col items-center">
              <div className="w-36 h-28 sm:w-44 sm:h-32 lg:w-48 lg:h-36 rounded-md bg-[#08183A] flex items-center justify-center border-2 border-[#F2BA1D]">
                <Image src="/img/reading-book.svg" className="w-20 h-20" alt="Student Image" width={80} height={80} />
              </div>
              </a>
              <p className="mt-2 text-center text-[#08183A] text-xl font-semibold">Student</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-36 h-28 sm:w-44 sm:h-32 lg:w-48 lg:h-36 rounded-md bg-[#08183A] flex items-center justify-center border-2 border-[#F2BA1D]">
                <Image src="/img/school.svg" className="w-20 h-20" alt="Teacher Image" width={80} height={80} />
              </div>
              <p className="mt-2 text-center text-[#08183A] text-xl font-semibold">Teacher</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-36 h-28 sm:w-44 sm:h-32 lg:w-48 lg:h-36 rounded-md bg-[#08183A] flex items-center justify-center border-2 border-[#F2BA1D]">
                <Image src="/img/user.svg" className="w-20 h-20" alt="Admin Image" width={80} height={80} />
              </div>
              <p className="mt-2 text-center text-[#08183A] text-xl font-semibold">Admin</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
