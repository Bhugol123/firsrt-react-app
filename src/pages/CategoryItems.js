
import React from 'react'
import { useParams } from 'react-router'
import Ecommerce from '../components/Ecommerce';
import { useApiHooks } from '../hooks/apiHooks';
import LoadingCompo from '../components/LoadingCompo';

const CategoryItems = () => {
    const {cata} = useParams();

    const [lode, err, data] = useApiHooks({api: 'https://www.themealdb.com/api/json/v1/1/filter.php', query:cata });


if(lode){
  return <LoadingCompo/>
}
if(err){
  return <h1>{err}</h1>
}
console.log(data);
  return (
    <div className='p-3 grid grid-cols-3 gap-4'>
     
    {data?.meals.map((meal, i)=>{
    return <Ecommerce meal={meal} key={i}/>
    })}
 
     </div>
  )
}

export default CategoryItems