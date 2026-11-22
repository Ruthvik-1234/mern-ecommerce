import React from 'react'
import {assets} from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600'>
    <div>
         <img src={assets.exchange_icon} className='w-12 m-auto mb-5  cursor-pointer' alt=''/>
        <p className='font-semibold cursor-pointer'>Easy Exchange Policy </p>
        <p className='text-gray-400 cursor-pointer'> we offer hassle free exchange policy</p>
    </div>

    <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 cursor-pointer ' alt=''/>
        <p className='font-semibold cursor-pointer'> 7 days return policy </p>
        <p className='text-gray-400 cursor-pointer'> we provide 7 days free return policy</p>
    </div>

    <div>
        <img src={assets.support_img} className='w-12 m-auto mb-2 cursor-pointer' alt=''/>
        <p className='font-bold cursor-pointer'>Best customer support </p>
        <p className='text-gray-400 cursor-pointer'>we provide 24/7 best customer support</p>
    </div>

    </div>
  )
}

export default OurPolicy
