import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
    {      /* Left Side */}  
    <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
    <div className='text-[#414141]'>
        <div className='flex items-center gap-2'> 
          <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          <p >OUR BESTSELLER</p>
        </div>
   <h1 className='prata-regular text-1xl sm:py-1 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
   <div className='flex iems-cener gap-2'>
    {/* <p className='w-8 md:w-11 px-6 py h-[1px] bg-[#414141]'></p> */}
            <p className='font-semibold text-sm h-[1px] md:text-base'>SHOP NOW </p>
            <p className='w-10 md:w-22 px-6 py h-[1px] bg-[#414141]'></p>
           
        </div>
      </div>
    </div> 
    {     /* Right Side */} 
    <img className='w-full lg:w-1/2' src={assets.hero_img} alt=''/>  
 </div>
  )
}

export default Hero
