import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const CategoryItems = () => {
    const {cata} = useParams();
    const[data, setData]=useState();
 const [lode, setLode] = useState(false);
 const [err, setErr] = useState();
  
 
  
  const getData = async()=>{
    setLode(true);
   try {
    const responce = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
            c: cata
        }
    });
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
console.log(data);
  return (
    <div></div>
  )
}

export default CategoryItems