import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center mb-6 mt-2 '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 25% off on every product</p>
        <p className='text-gray-600 mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam illo nesciunt error consectetur delectus, ut quasi assumenda animi eius! </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-1 pl-3'>
        <input type='email' placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
