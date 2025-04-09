import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import Card from './Card';

function Hero() {
    return (
        <>
            <div className='flex w-full  max-w-[1200px] mt-[75px] flex-col  py-4  items-center '>
                <div className="flex flex-col items-center py-8">
                    <div className='flex  bg-white  border-[1px] border-neutral-100 px-4 py-2 rounded-full text-[13px] font-normal tracking-tight items-center'> <span className='h-2 w-2 rounded-full bg-blue-500 mr-2'></span>Only 2 Spots available</div>
                    <div className='text-[22px] sm:text-[30px] md:text-center md:text-[48px] lg:[55px]   px-2 font-medium mt-6  tracking-tighter'>Launch your Dream
                        <span className='font-light font-serif italic text-blue-500'>Within days,</span> not months®
                    </div>
                    <div className='flex text-center leading-5 text-[15px] sm:text-[20px] tracking-tight text-neutral-400 font-normal mt-2'>AI-powered startup studio helping founders launch<br />
                        MVPs and scale their ideas under 5 weeks.</div>
                    <div className="flex space-x-3 mt-10">
                        <div className='bg-blue-600 px-4 py-3 rounded-full text-white font-medium text-[15px] tracking-tight'>See Plans & Pricing</div>
                        <div className='flex items-center bg-neutral-900 px-4 py-3 rounded-full text-white font-medium text-[15px] tracking-tight'>Book a call<span className='ml-1'><HiArrowLongRight /></span></div>
                    </div>
                </div>
            </div>

            <div className='w-full  py-2 lg:flex  max-w-[1200px] mt-0.5  '>
                <div className='sm:block py-15 lg:max-w-[45%]    md:px-5 '>
                    <h2 className="heading  px-4 sm:py-2 md:py-5 lg:py-8 flex items-center text-[30px] md:text-4xl font-medium font-poppins text-blue-500">
                        Your business deserves great design
                    </h2>
                    <h2 className='  mt-2 w-fit text-[17.5px] text-start px-6.5'>
                    Logos, websites, packaging design and more. Our trusted designer community has helped thousands of businesses launch, grow, expand and rebrand with custom, professional design.
                    </h2>
                </div>
                <div className=' block   px-2 py-15 md:py-2 md:px-6'>
                <img class="design-figure__image-container__image" alt="Colorful logo, packaging and website designs for beverage brand Zappyo" title="Colorful logo, packaging and website designs for beverage brand Zappyo" src="https://99designs-start-static.imgix.net/homepage/business-deserves-great-design.png?auto=format&amp;q=35&amp;w=808&amp;dpr=2"></img>
                </div>
            </div>

            <div className='w-full max-w-[1200px]  flex flex-col justify-center items-center'>
                <h2 className='px-4 sm:py-2 md:py-5 lg:py-4 flex items-center text-[30px] md:text-4xl font-medium '>It all starts with a logo</h2>
                <h1 className=' flex max-w-[640px] text-[15px] text-center  '>Whether you're brand new or on brand two (or three!), we've got a solution that'll suit your business and elevate your branding.</h1>
                <div className=' p-1 gap-5 max-w-3xl flex justify-evenly'>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Hero
