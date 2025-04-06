import React from 'react'

function Navbar() {
  return (
    <div className='flex w-full justify-between sm:px-[240px] py-4 items-center bg-neutral-50/40  border-b-[2px] border-neutral-100 rounded-2xl ' >
      <div className='font-light text-2xl tracking-tighter'>Freelance <span className='italic font-medium'>site</span></div>
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
      <div className='bg-gray-950 text-white px-4 py-2 font-medium text-[16px] tracking-tight rounded-full'>Book Intro Call</div>
    </div>
  )
}

export default Navbar
