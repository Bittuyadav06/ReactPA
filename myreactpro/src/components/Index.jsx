import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About';


export default function Index() {
    return (
        <div>
            <header className='p-3 bg-blue-400 w-full'>
                <nav>
                    <div className='flex justify-between'>
                        <ul className='flex gap-2 font-bold text-gray-700'>
                            <Link to="/index"><li className='hover:text-white'>Home</li></Link>
                            <li className='hover:text-white'>about</li>
                        </ul>
                        <ul className='flex gap-2 font-bold text-gray-700'>
                            <Link to="/"><li className='hover:text-white'>login</li></Link>
                            <li className='hover:text-white'>singup</li>
                        </ul>
                    </div>
                </nav>
              
            </header>
              <Home/>
              <About/>
        </div>
    )
}
