"use client";
import Link from "next/link";
import React, { useState } from "react";
import pic from "@/assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="container mx-auto w-11/12 flex justify-between items-center py-5">

          {/* Logo */}
          <div>
            <img className="w-28" src={pic.src} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center font-bold">
            <Link href="/">Home</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3">
            <CiSearch size={25} />
            <LiaLuggageCartSolid size={25} />
            <button className="text-white font-bold rounded-2xl px-5 py-2 bg-[#2eca7f]">Login</button>
            <button className="text-white font-bold rounded-2xl px-5 py-2 bg-[#2eca7f]">Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {open ? (
              <IoClose size={30} onClick={() => setOpen(false)} />
            ) : (
              <HiOutlineMenuAlt3 size={30} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-semibold">

            <div className="flex flex-col items-center gap-3">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/pages" onClick={() => setOpen(false)}>Pages</Link>
              <Link href="/courses" onClick={() => setOpen(false)}>Courses</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-4 pt-3">
                <CiSearch size={25} />
                <LiaLuggageCartSolid size={25} />
              </div>

              <div className="flex gap-3 pt-4">
                <button className="text-white font-bold rounded-2xl px-5 py-2 bg-[#2eca7f]">Login</button>
                <button className="text-white font-bold rounded-2xl px-5 py-2 bg-[#2eca7f]">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Space for fixed navbar so content won't hide */}
      <div className="mt-28"></div>
    </>
  );
};

export default Navber;
