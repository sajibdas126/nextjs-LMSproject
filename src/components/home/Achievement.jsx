import React from 'react'

const Achievement = () => {
  return (
    <div>
        <div className='container mx-auto w-11/12'>
            <div className='py-10'>
                <h3 className='text-[#2eca7f] '>Some Fun Fact </h3>
                <h1 className='text-3xl font-bold'>Our Great  <span className='text-[#2eca7f] underline'>Achievement</span></h1>
            </div>

            <div className='grid md:grid-cols-4 gap-4'>
                <div className='p-6 border border-gray-100 shadow rounded-md'>
                    <h1 className='text-3xl font-bold'>858</h1>
                    <p  className='text-gray-700'>Enrolled Students</p>
                </div>
                 <div className='p-6 border border-gray-100 shadow rounded-md'>
                    <h1 className='text-3xl font-bold'>858</h1>
                    <p  className='text-gray-700'>Academic Programs</p>
                </div>
                 <div className='p-6 border border-gray-100 shadow rounded-md'>
                    <h1 className='text-3xl font-bold'>858</h1>
                    <p  className='text-gray-700'>Winning Award</p>
                </div>
                 <div className='p-6 border border-gray-100 shadow rounded-md'>
                    <h1 className='text-3xl font-bold'>858</h1>
                    <p  className='text-gray-700'>Certified Students</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievement