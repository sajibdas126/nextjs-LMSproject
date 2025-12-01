import React from 'react'
import pic from "@/assets/images/logo.png"
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
import { CiYoutube } from 'react-icons/ci'
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='bg-blue-800'>
      <div className='grid md:grid-cols-4 items-center justify-center container mx-auto w-11/12 '>
      {/* div-1 */}
        <div className=''>
          <div className='py-4'>
            <img className="w-28" src={pic.src} alt="logo" />
          </div>
          <p className='font-semibold'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Fusce <br /> vitae risus nec dui venenatis <br /> dignissim.</p>
          <div className='flex items-center gap-4'>
            <h1 className='text-1xl font-semibold'>CONNECT WITH:</h1>
            <IoLogoInstagram></IoLogoInstagram>
            <IoLogoFacebook></IoLogoFacebook>
            <CiYoutube />
          </div>
        </div>
        {/* div-1Colose */}
        <div>
          <h1 className='py-4 text-2xl font-semibold'>Courses</h1>
          <div className='text-1xl font-semibold'>
          <h3>Creativ Writing</h3>
          <h3>SEO Business</h3>
          <h3>Social Marketing</h3>
          <h3>Graphic Design</h3>
          <h3>Website Devlopment</h3>
          </div>
        </div>
        {/* close-2 */}
        <div>
          <h1 className='py-4 text-2xl font-semibold'>Company</h1>
          <div className='text-1xl font-semibold'>
            <h3>About</h3>
          <h3>Knowledge Base</h3>
          <h3>Affilliate Program</h3>
          <h3>Community</h3>
          <h3>Market API</h3>
          <h3>Spport Team</h3>
          </div>
        </div>
        {/* close-3 */}
        <div>
          <h1 className='py-4 text-2xl font-semibold'>Contact Info</h1>
          <div className='flex items-center gap-1'>
            <div>
              <IoIosPhonePortrait className='w-10 h-20'></IoIosPhonePortrait>
            </div>
            <h1 className='text-1xl font-semibold'>Phone Number <br /> <span>+880 1710232634</span></h1>
          </div>
          <div className='flex items-center gap-1'>
            <div>
              
              <MdEmail className='w-10 h-20'></MdEmail>
            </div>
            <h1 className='text-1xl font-semibold'>Email Address <br /> <span>sajibdashtrg@gmail.com</span></h1>
          </div>
          <div className='flex items-center gap-1'>
            <div>
              <GrMapLocation className='w-10 h-20'></GrMapLocation>
            </div>
            <h1 className='text-1xl font-semibold'>Phone Number <br /> <span>+880 1710232634</span></h1>
          </div>
        </div>
       
      </div>
       <div className="border-t  border-gray-700 mt-10 pt-5 text-center text-sm ">
        © 2025 <span className="text-[#5caf90] font-semibold">EcoShop</span>. All
        rights reserved.
      </div>
   
    </div>
  )
}

export default Footer