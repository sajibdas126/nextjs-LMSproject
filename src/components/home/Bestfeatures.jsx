import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/images/icon/01.jpg"
import img2 from "@/assets/images/icon/02.jpg"
import img3 from "@/assets/images/icon/03.jpg"
import img4 from "@/assets/images/icon/04.jpg"

const Bestfeatures = () => {
  return (
    <div>
      <div className='container mx-auto w-11/12'>
        <div>
          <h3 className='text-md font-semibold text-[#2eca7f]'>Why Choose Edusion</h3>
          <h1 className='text-4xl font-bold'>Find the <span className='text-[#2eca7f] underline'>best features</span>of Edusion</h1>
          
          <div className='grid md:grid-cols-3 gap-10 py-10'>
            <div className='border border-gray-100 shadow p-8 rounded-2xl'>
              <div className='flex items-center gap-5'>
                <Image src={img1}></Image>
                <h1 className='text-2xl font-semibold'>Learn More <br />Anywher</h1>
              </div>
              <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
            <div className='border border-gray-100 shadow p-8 rounded-2xl'>
              <div className='flex items-center gap-5'>
                <Image src={img2}></Image>
                <h1 className='text-2xl font-semibold'>Learn More <br />Anywher</h1>
              </div>
              <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
            <div className='border border-gray-100 shadow p-8 rounded-2xl'>
              <div className='flex items-center gap-5'>
                <Image src={img3}></Image>
                <h1 className='text-2xl font-semibold'>Learn More <br />Anywher</h1>
              </div>
              <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
            <div className='border border-gray-100 shadow p-8 rounded-2xl'>
              <div className='flex items-center gap-5'>
                <Image src={img4}></Image>
                <h1 className='text-2xl font-semibold'>Learn More <br />Anywher</h1>
              </div>
              <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
            <div className='border border-gray-100 shadow p-8 rounded-2xl'>
              <div className='flex items-center gap-5'>
                <Image src={img1}></Image>
                <h1 className='text-2xl font-semibold'>Learn More <br />Anywher</h1>
              </div>
              <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
            <div className='border border-gray-100 shadow p-8 rounded-2xl'>
              <div className='flex items-center gap-5'>
                <Image src={img3}></Image>
                <h1 className='text-2xl font-semibold'>Learn More <br />Anywher</h1>
              </div>
              <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bestfeatures