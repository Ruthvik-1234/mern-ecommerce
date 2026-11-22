import React, { useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import {useEffect} from 'react'
import ProductItem from '../components/ProductItem'

const Collection = () => {
//  { # getting products }
  const {products,search,showSearch} =useContext(ShopContext)  // rendering it 
  const [showfilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant');

   const toggleCategory=(e)=>{
      if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=>item!==e.target.value))
      }else{
        setCategory(prev=>[...prev,e.target.value])
      }
   }

   const toggleSubCategory=(e)=>{  
   if(subCategory.includes(e.target.value)){
     setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
   }else{
     setSubCategory(prev=>[...prev,e.target.value])
   }
 }

  // useEffect(() => {
  //    setFilterProducts(products); // initially showing 12 products
  // },[])
  // whenever category or subcategory changes, apply filter will be called
// useEffect(() => {
//      console.log(subCategory); 
//   },[subCategory])


  const applyFilter=()=>{   
  let productsCopy=products.slice();
   if(search && showSearch){
    productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));   
   }

  if(category.length>0){
       productsCopy=productsCopy.filter(item=>category.includes(item.category));
   } 

   if(subCategory.length>0){
       productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));
   } 
 setFilterProducts(productsCopy);  // setting the filtered products      
  }

   const sortProduct=()=>{
     let  fpCopy=filterProducts.slice();
     switch (sortType) {
      case 'lowToHigh':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'highToLow':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter(); 
        break; 

   }
  }

   useEffect(() => {       
    applyFilter(); 
   },[category,subCategory,search,showSearch]); 

   useEffect(() => {
    sortProduct();
   }, [sortType]); 
 
 return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t'>
   {/* filter  options  */}
   <div className='min-w-60'>
    <p onClick={()=>setShowFilter(!showfilter)}className='my-2 text-xl flex items-center cursor pointer gap-2'>FILTERS
      <img className={`h-3 sm:hidden ${showfilter? 'rotate-90':''}`} src={assets.dropdown_icon} alt='' />
    </p>
    {/* Category filter  */}
    <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter?' ':'hidden'} sm:block`}>
      <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
      <div className='flex flex-col gap-4 text-sm font-light text-gray-600'>

        <p className='flex gap-2'>
        <input type='checkbox' className='w-3' value={'Men'} onChange={toggleCategory}/>MEN
        </p>

        <p className='flex gap-2'>
        <input type='checkbox' className='w-3' value={'Women'} onChange={toggleCategory}/>WOMEN
        </p>

        <p className='flex gap-2'>
        <input type='checkbox' className='w-3' value={'Kids'} onChange={toggleCategory}/>kids
        </p>

      </div>

    </div>
   {/* sub category filter */}
   
   <div className={`border border-gray-300 pl-5 py-3 my-6 ${showfilter?' ':'hidden'} sm:block`}>
      <p className='mb-3 text-sm font-medium'>Type</p>
      <div className='flex flex-col gap-4 text-sm font-light text-gray-600'>

        <p className='flex gap-2'>
        <input type='checkbox' className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>TopWear
        </p>

        <p className='flex gap-2'>
        <input type='checkbox' className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>BottomWear
        </p>

        <p className='flex gap-2'>
        <input type='checkbox' className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/>WinterWear
        </p>

      </div>

    </div>

   </div>
   {/* right side  */}
   <div className='flex-1 '>
    <div className='flex justify-between text-base sm:text-2xl mb-4'>
  <Title text1={'ALL'} text2={'COLLECTION'}/>
  {/* product sort */}
  <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
    <option value='relevant'>Sort by: Relevant</option>
    <option value='lowToHigh'>Sort by: Low to High</option>
    <option value='highToLow'>Sort by: High to Low</option>
    <option value='newArrivals'>New Arrivals</option>
   </select>
  </div>
{/* map products */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
  {
    filterProducts.map((item,index)=>(
      <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
    ))
  }
</div>
   </div>
 </div>
 )
}   
export default Collection
