import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

function Navbar() {
  return (
    <div className='flex fixed left-0 right-0 z-50 w-full justify-between sm:px-[240px] py-4 items-center bg-neutral-50  border-b-[2px] border-neutral-100  ' >
      <div className='font-extralight text-2xl tracking-tighter cursor-pointer'>Freelance <span className='italic font-medium'>site</span></div>
      <div className='flex justify-between  max-w-[234px] w-full tracking-tight'>
        <ul>
          <a href="" className='flex items-center gap-x-1 hover:scale-105 duration-75 text-text hover:text-black transition-colors font-medium text-[15px]' >
            <span>Work</span>
          </a>
        </ul>
        <ul>
          <a href="" className='flex items-center gap-x-1 hover:scale-105 duration-75 text-text hover:text-black transition-colors font-medium text-[15px]' >
            <span>Pricing</span>
          </a>
        </ul>
        <ul>
          <a href="" className='flex items-center gap-x-1 hover:scale-105 duration-75 text-text hover:text-black transition-colors font-medium text-[15px]' >
            <span>Contact</span>
          </a>
        </ul>
      </div>
      <div className='flex space-x-2 items-center bg-gray-950 text-white px-4 py-2 font-medium text-[15px] tracking-tight rounded-full cursor-pointer hover:bg-neutral-800 transition-colors duration-300'>
        <div>Book Intro Call</div>
        <div><HiArrowLongRight /></div>
      </div>
      </div>
  )
}

      export default Navbar
