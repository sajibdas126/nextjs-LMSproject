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
    slidesToScroll: 3
  };

    return (
        <div className="slider-container">
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
     
      </Slider>
    </div>
    
    )
};

export default HeroSlider;
