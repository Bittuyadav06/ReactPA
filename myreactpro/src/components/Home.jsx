import React from 'react'
import image2 from '../Images/image2.jpg'
import Navbar from './Navbar'



export default function Home() {
  return (
    <>    
    <div className='bg-blue-300 h-screen w-screen pt-4'>
    <div className='flex justify-items-center'>
        <div className='w-full flex '>
          <div className=' w-1/2'>
            <p className='text-white font-bold '> 
                Content write here..

                
            </p>
          </div>
          <div>
            <img src={image2} className='w-[25%] '/>
          </div>
        </div>
        
    </div>
    
    </div>
    </>
  )
}
