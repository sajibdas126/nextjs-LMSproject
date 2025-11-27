"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import img1 from "../../assets/images/1.png"  
import img2 from "../../assets/images/2.png"  
import img3 from "../../assets/images/3.png"  
import img4 from "../../assets/images/4.png"  
import img5 from "../../assets/images/5.png"  
import Image from 'next/image';

const HeroSlider = () => {      
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:3,
    autoplay: true,
     autoplaySpeed: 2000,
  };

    return (
    <div className='container mx-auto w-11/12 py-30'>
        <h1 className=' justify-center text-center bg-[#cdf0df] p-3 rounded-2xl text-2xl font-semibold text-[#2eca7f]'>Trusted Company Arround The World!</h1>
      <div>
            <div className="slider-container py-10">
      <Slider {...settings}>
        <div>
          <Image src={img1}></Image>
        </div>
        <div>
          <Image src={img2}></Image>
        </div>
        <div>
          <Image src={img3}></Image>
        </div>
        <div>
          <Image src={img4}></Image>
        </div>
        <div>
          <Image src={img5}></Image>
        </div>
         <div>
          <Image src={img3}></Image>
        </div>
        <div>
          <Image src={img4}></Image>
        </div>
        <div>
          <Image src={img5}></Image>
        </div>
     
      </Slider>
    </div>
      </div>
    </div>
    
    )
};

export default HeroSlider;
