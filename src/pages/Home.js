import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from "react";
import CategoryCard from '../components/CategoryCard';




const Home = () => {
  const[data, setData]=useState();
 const [lode, setLode] = useState(false);
 const [err, setErr] = useState();
  
 
  
  const getData = async()=>{
    setLode(true);
   try {
    const responce = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    setLode(false);
    setData(responce.data)
   
   } catch (error) {
   
    setLode(false);
    setErr(err?.message);
   }
  }
useEffect(()=>{
getData();
}, []);

if(lode){
  return <h1>Loading...</h1>
}
if(err){
  return <h1>{err}</h1>
}

  return (
    <div className='p-3 grid grid-cols-3 gap-4'>
     
   {data?.categories.map((cata, i)=>{
   return <CategoryCard cata={cata} key={i}/>
   })}



    </div>
   
    
  )
}

export default Home