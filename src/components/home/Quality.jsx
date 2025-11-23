import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Quality = () => {
  return (
    <div>
        <div className='grid md:grid-cols-3 container mx-auto w-11/12'>
            <div className=' p-6'>
                <h1 className='text-2xl font-bold'>Quality Education</h1>
                <p className='text-gray-700 py-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                <Link href="/"><button className='flex items-center gap-2 hover:bg-[#2eca7f] hover:px-6 py-2 rounded-2xl hover:text-white'>EXPLORE COURSES <FaArrowRight /></button></Link>
            </div>
            <div className='  p-6'>
                <h1 className='text-2xl font-bold'>Experienced Teachers</h1>
                <p className='text-gray-700 py-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                <Link href="/"><button className='flex items-center gap-2 hover:bg-[#2eca7f] hover:px-6 py-2 rounded-2xl hover:text-white'>EXPLORE COURSES <FaArrowRight /></button></Link>
            </div>
            <div className=' p-6' >
                <h1 className='text-2xl font-bold'>Delicious Food</h1>
                <p className='text-gray-700 py-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
               <Link href="/" > <button className='flex items-center gap-2 hover:bg-[#2eca7f] hover:px-6 py-2 rounded-2xl hover:text-white'>EXPLORE COURSES <FaArrowRight /></button></Link>
            </div>
        </div>
    </div>
  )
}

export default Quality