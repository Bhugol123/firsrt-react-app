import axios from "axios";
import { useEffect, useState } from "react";

export const useApiHooks = ({api, query, id})=>{
    const[data, setData]=useState();
 const [lode, setLode] = useState(false);
 const [err, setErr] = useState();
  
 
  const getData = async()=>{
    setLode(true);
   try {
    const responce = await axios.get(api, {
        params: {
            c: query ?? '',
            i: id ?? ''
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


return [lode, err, data]

}