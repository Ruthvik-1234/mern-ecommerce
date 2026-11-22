import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-17'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, architecto optio deserunt et officiis iusto animi consectetur dolorum ex mollitia? Doloremque sequi saepe facere error soluta provident neque optio impedit.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus suscipit consectetur voluptatum, maxime minus corrupti laborum quibusdam, porro ratione ipsum blanditiis autem. Odio fugiat nesciunt, animi ipsa fuga asperiores tempora?'</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident dolorum ratione in, eum nesciunt officiis excepturi nostrum consectetur necessitatibus! Ad, sed sunt cumque similique facere porro nisi inventore neque!</p>
         </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, explicabo! Eveniet, rerum tenetur, ducimus accusamus incidunt aspernatur reiciendis iure corrupti optio nihil praesentium fuga. Unde repellendus placeat inventore exercitationem illo?</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, explicabo! Eveniet, rerum tenetur, ducimus accusamus incidunt aspernatur reiciendis iure corrupti optio nihil praesentium fuga. Unde repellendus placeat inventore exercitationem illo?</p>
        </div>
 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional conventional service</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, explicabo! Eveniet, rerum tenetur, ducimus accusamus incidunt aspernatur reiciendis iure corrupti optio nihil praesentium fuga. Unde repellendus placeat inventore exercitationem illo?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About

