import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center'>
        
        <div className="dis-image h-[600px]">
        <dotlottie-player src="https://lottie.host/ae1a8871-c585-4a4b-8f2f-f91fb3a6d4c3/64IgqVvVXw.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>

        </div>

        <div className="dis-info space-y-3">
          <h1 className='text-2xl font-bold space-y-8'>HI, I am Bhukgol kc</h1>
          <p className='text-red-700 italic'>Some Dev, Freelancer, Rounder</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi maxime temporibus magnam, provident odit cupiditate esse doloribus illum repudiandae animi, placeat voluptate optio, quo labore quas aliquam iste eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, mollitia debitis explicabo fugit odit saepe facilis omnis eos eaque assumenda in porro error, similique, cumque repellendus quaerat sed. Consequatur, nulla?</p>

        </div>
        
    </div>
  )
}

export default Display