import React from 'react'
import Image from 'next/image'

export default function RightPart() {
  return (
    <div className='h-screen bg-secondary w-100 lg:w-3/5 hidden lg:block '>
      <div className='container mx-auto  h-full  px-6 lg:px-16 pt-8 flex flex-col  items-center'>

        <div className='bg-[#F1F1F1] w-1/2 h-1/2 absolute rounded-full shadow-2xl top-1/4'>
        </div>

        <Image className='my-auto relative' src='banner.svg' alt='presentetion image' width={600} height={600} />

        <footer className='font-bold   mt-auto block flex justify-center mb-2 text-white '>
          Ledafy test-case copyright Arda Işık ©
        </footer>
      </div>
    </div>
  )
}

