import React, { use, useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useEffect, useState } from 'react'; 
import ProductItem from './ProductItem';


const LatestCollection = () => {
   
    const {products}=useContext(ShopContext);
    const [latestproducts,setLatestProducts] =useState([]);
    
    useEffect(() => {
       setLatestProducts(products.slice(0,10));
    },[])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECION'}/>
          <p className='w-4/4 m:auto  text-xs sm:text-sm md:text-base text-gray-600'>
            Be a beginner at some things, but you've got a black belt in shopping
          </p>
      </div>
{/* {rendering products} */}
   <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-x-6'>
     {
      latestproducts.map((item,index)=>(
        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
      ))
     }
   </div>
</div>
  )
}

export default LatestCollection
