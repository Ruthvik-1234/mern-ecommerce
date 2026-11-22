import React, { use, useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
const BestSeller = () => {

    const {products}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);  
    useEffect(() => {
        const bestproduct=products.filter((item)=>(item.bestseller))
        setBestSeller(bestproduct.slice(0,10));
        
    },[])
  return (
    <div className='my-5'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                You can have anything you want in life if you dress for it
        </p>
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-x-6'> 
      
        {
        bestSeller.map((item,index)=>(
        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} /> 
        ))
        }
      </div>
    </div>
  )
}

export default BestSeller
