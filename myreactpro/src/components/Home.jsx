import React from 'react'
import download from '.'


export default function Home() {
  return (
    <>
    <div className='bg-blue-300 h-screen w-screen'>
    <div className='flex justify-items-center'>
        <div className='w-1/2'>
          <div>
            <p className='text-white font-bold '> 
                Content write here..
                <img src={require('../image/download.jpg')} alt='...'/>
            </p>
          </div>
        </div>
        
    </div>
    
    </div>
    </>
  )
}
