import React from 'react'
import { recipe } from '../dummy/data'
import { meal } from '../dummy/data'

const Home = () => {
  return (
    <>
    <div className='p-5 space-y-5'>
      <h1 >{recipe.name}</h1>
      <img className='h-[200px] w-[200px]' src={recipe.image} alt="" />
      <ol>
        <h1 className='text-xl font-bold'>Ingridients</h1>
         {recipe.ingredients.map((ing, i)=>{
          return <li key={i}>{`${i+1}.${ing}`}</li>
         })}
      </ol>

      <h1 >{recipe.name}</h1>
      <ol>
        <h1 className='text-xl font-bold'>Instructions</h1>
         {recipe.instructions.map((ing, i)=>{
          return <li key={i}>{`${i+1}.${ing}`}</li>
         })}
      </ol>
    </div>

    <div className='p-5 space-y-5' >
      <h1>{meal.strMeal}</h1>
      <img className='h-[200px] w-[200px]' src={meal.strMealThumb} alt="" />
      <ol>
        <h1 className='text-xl font-bold'>Meal</h1>
      
      </ol>
    </div>
    </>
  )
}

export default Home