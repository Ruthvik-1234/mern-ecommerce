import React from 'react'
import {useState} from 'react';

const Login = () => {
  const [currentState,setCurrentState]=useState("Sign Up");
  const onSubmitHandler= async (e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700' >
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl '>{currentState}</p>
        <hr className='border-none h-[1.8px] w-12 bg-gray-800'/>
      </div>
      {currentState==='Login'?'':<input className='w-full px-3 py-2 border border-gray-800' type='text' placeholder=' Name' required/>}
       
        <input className='w-full px-3 py-2 border border-gray-800' type='email' placeholder='Email' required/>
         <input className='w-full px-3 py-2 border border-gray-800' type='Password' placeholder=' Password' required/> 
        <div className='text-sm mt-[8px] justify-between w-full flex'>
          <p className='cursor-pointer'>Forgot PassWord?</p>
          {
            currentState==='Login'?<p onClick={()=>setCurrentState('Sign Up')}className='cursor-pointer'>Create Account</p>:<p className='cursor-pointer'onClick={()=>setCurrentState('Login')}>Login?</p>
          }
          </div>
          <button className='cursor-pointer bg-black text-white text-sm px-3 py-3 w-[90px] border border-gray-500'>{currentState==='Login'?'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login
