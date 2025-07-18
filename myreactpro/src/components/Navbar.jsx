import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

export default function Navbar() {
    
  return (
    <div>
        <header className='p-3 bg-blue-400 w-full'>
                <nav>
                    <div className='flex justify-between'>
                        <ul className='flex gap-2 font-bold text-gray-700'>
                            <Link to="/index"><li className='hover:text-white'>Home</li></Link>
                            <Link to="/about"><li className='hover:text-white'>about</li> </Link>
                        </ul>
                        <ul className='flex gap-2 font-bold text-gray-700'>
                            <Link to="/"><li className='hover:text-white' >login</li></Link>
                            <li className='hover:text-white'>singup</li>
                        </ul>
                    </div>
                </nav>
              
            </header>
      
    </div>
  )
}
