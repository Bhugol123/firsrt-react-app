import React from 'react'

const Header = () => {
  return (
   <header className='bg-black text-white flex items-baseline justify-between px-4 py-2 '>

    <h1 className='text-2xl'>Tail Web</h1>
    <nav className='space-x-4 '>
        <a className='same' href="#">About</a>
        <a className='same' href="#">Contact</a>
    </nav>

   </header>
  )
}

export default Header