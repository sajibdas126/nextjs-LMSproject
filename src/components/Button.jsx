"use client"
import React from 'react'


const Button = () => {
  return (
    <div>
        <button className='bg-amber-600 rounded-2xl px-6 py-2'
        onClick={() => console.log("I have click here")}
        >Click me</button>
    </div>
  )
}

export default Button