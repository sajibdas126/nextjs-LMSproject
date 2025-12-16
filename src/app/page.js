import Achievement from "@/components/home/Achievement";
import Bestfeatures from "@/components/home/Bestfeatures";
import Hero from "@/components/home/Hero";
import Quality from "@/components/home/Quality";
import Skills from "@/components/home/Skills";
import Slider from "@/components/home/Slider";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   
    <Hero></Hero>
    <Quality></Quality>
    <Skills></Skills>
    <Achievement></Achievement>
    <Slider></Slider>
    <Bestfeatures></Bestfeatures>
   
   </div>
  );
}
