import Image from 'next/image'
import React from 'react'
import img from "@/assets/images/about1 (1).png"

const Skills = () => {
  return (
    <div>
        <div className='container mx-auto w-11/12 py-18 '>
            <div className='grid md:grid-cols-2 gap-15'>
            {/* about images */}
            <div>
                <Image src={img}></Image>
            </div>
             {/* about text */}
            <div className=''>
                <h1 className='text-5xl font-bold '>Learn new skills to go <br /> <span className='text-[#2eca7f] underline uppercase'>ahead for your</span> career.</h1>
                <p className='text-gray-700 text-wrap py-5'>Lorem ipsum dolor sit amet,  consectetur notted adipisicing elit sed do  eiusmod tempor incididunt ut labore et simply.</p>

               <div className='py-5 flex flex-col gap-5'>
                 <div className='border border-gray-100 p-6 rounded-md shadow '>
                    <h1 className='text-2xl font-bold'>Our Mission</h1>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do eiusmod tempor ut labore.</p>
                </div>
                 <div className='border  border-gray-100 p-6 rounded-md shadow '>
                    <h1 className='text-2xl font-bold'>Our Mission</h1>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do eiusmod tempor ut labore.</p>
                </div>
               </div>

                <button className='px-6 py-2 rounded-2xl bg-[#2eca7f] hover:bg-blue-400 text-xl text-white'>Discover More</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills