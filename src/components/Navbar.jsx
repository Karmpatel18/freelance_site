import { useState } from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex fixed  left-0 right-0 z-50 w-full justify-between   items-center bg-neutral-50 h-[76px] border-b-[1px] border-neutral-200  '>
      <div className='flex min-h-full border-l-[1px] ml-20 border-neutral-200'> </div>



      <div className="flex w-full justify-between px-[18px]">
        <div className='font-extralight  text-2xl tracking-tighter cursor-pointer'>Freelance <span className='italic font-medium'>site</span>
        </div>

        {/* for large device */}
        <div className=' flex  max-lg:hidden justify-between  max-w-[234px] w-full py-1.5 px-2 tracking-tight'>
          <ul>
            <a href="" className='flex items-center gap-x-1 hover:scale-105 duration-75 text-text hover:text-black transition-colors  font-medium text-[15px] ' >
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
        <div className='flex max-lg:hidden space-x-2 items-center bg-gray-950 text-white px-4 py-2 font-medium text-[15px] tracking-tight rounded-full cursor-pointer hover:bg-neutral-800 transition-colors duration-300'>
          <div>Book Intro Call</div>
          <div><HiArrowLongRight /></div>
        </div>
        {/* For Small Device */}
      <button className="flex lg:hidden text-2xl pr-0.5 cursor-pointer hover:scale-110 duration-150 p-3 text-center items-center" onClick={() => setIsOpen(!isOpen)
      }>
        ☰
      </button>
      </div>
      
      <div className='flex min-h-full border-r-[1px] mr-20 border-neutral-200'> </div>

      
      {isOpen &&
        (<div className='absolute top-16  mt-[11px] mx-20 left-0 right-0 flex flex-col min-w-max bg-white  border-[1px] text-center items-center border-neutral-200 duration-300 lg:hidden  '>
          <a href="" className='flex items-center gap-x-1 hover:scale-105 duration-75 border-neutral-100 border-b-[1px] w-full justify-center py-2 text-text hover:text-black transition-colors  font-medium text-[15px] ' >
            <span >Work</span>
          </a>
          <a href="" className='flex items-center gap-x-1 hover:scale-105 duration-75 border-neutral-100 border-b-[1px] w-full justify-center py-2 text-text hover:text-black transition-colors  font-medium text-[15px] ' >
            <span >Pricing</span>
          </a>
          <a href="" className='flex items-center gap-x-1 hover:scale-105 duration-75  w-full justify-center py-2 text-text hover:text-black transition-colors  font-medium text-[15px] ' >
            <span >Contact</span>
          </a>

        </div>)
      }
    </div>
  )
}

export default Navbar
