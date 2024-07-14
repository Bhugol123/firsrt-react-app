import React from 'react'
import { DiAndroid, DiAppstore, DiCss3, DiHtml5, DiJava, DiNodejs, DiPython, DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold text-center'>Technology I Used</h1>

      <div className="dev-icones grid grid-cols-4 justify-items-center">
        <DiAndroid size={200} className='animate-bounce'/>
        <DiPython size={200}/>
        <DiJava size={200}/>
        <DiHtml5 size={200}/>
        <DiCss3 size={200}/>
        <DiAppstore size={200}/>
        <DiReact size={200}/>
        <DiNodejs size={200} className='hover:text-[red]'/>
      </div>


        
    </div>
  )
}

export default Tech