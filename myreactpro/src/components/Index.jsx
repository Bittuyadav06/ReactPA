import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Index() {
    return (
        <div>
                       
              <Home/>
              <About/>
              <Footer/>
              
        </div>
    )
}
