import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

function Hero() {
    return (
        <div className='flex w-full max-w-[1200px] mt-[75px] flex-col  py-4  items-center '>
            <div className="flex flex-col items-center py-8">
                <div className='flex  bg-white  border-[1px] border-neutral-100 px-4 py-2 rounded-full text-[13px] font-normal tracking-tight items-center'> <span className='h-2 w-2 rounded-full bg-blue-500 mr-2'></span>Only 2 Spots available</div>
                <div className='text-[22px] sm:text-[30px] md:text-center md:text-[48px] lg:[55px]   px-2 font-medium mt-6  tracking-tighter'>Launch your Dream
                <span className='font-light font-serif italic text-blue-500'>Within days,</span> not months®
                </div>
                <div className='flex text-center leading-5 text-[15px] sm:text-[20px] tracking-tight text-neutral-400 font-normal mt-2'>AI-powered startup studio helping founders launch<br/>
                    MVPs and scale their ideas under 5 weeks.</div>
                <div className="flex space-x-3 mt-10">
                <div className='bg-blue-600 px-4 py-3 rounded-full text-white font-medium text-[15px] tracking-tight'>See Plans & Pricing</div>
                <div className='flex items-center bg-neutral-900 px-4 py-3 rounded-full text-white font-medium text-[15px] tracking-tight'>Book a call<span className='ml-1'><HiArrowLongRight/></span></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
