import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Index from '../Index.jsx';


export default function Login({ isOpen }) {
   

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post("http://localhost:3000/api/login", {
        //         username, password,
        //     });
        //     // Assuming your API returns { success: true, token: '...' }

        //     if (response.data.success) {
        //         setMessage("Login successful " + response.data.token);
        //     } else {
        //         setMessage("Login Failed:");
        //     }
        // } catch (error) {
        //     console.error(error);
        //     setMessage("Login failed! : Server Error");

        // }
        
  if (username === "admin" && password === "123") {
    setMessage("Login successful! (fake token: abc123)");
  } else {
    setMessage("Login failed: Invalid credentials");
  }


    };
    if (!isOpen) return null;

    return (
        <>
            <div>
                <div className="w-screen justify-items-center py-4">
                    <div className='from  md:w-[25%] mt-4 border rounded-md bg-blue-200 justify-items-center '
                        onSubmit={handleLogin}>
                        <p className='font-bold text-blue-700'>Login</p>
                        <div className='text-left'>
                            <label htmlFor="username" className='w-full text-left'>username</label>
                            <input className='w-full' 
                            type='text' 
                            id="username" 
                            value={username} 
                            onChange={(e)=>setUsername(e.target.value)} required
                            />
                        </div>
                        <div className='text-left'>
                            <label htmlFor="password">password</label>
                            <input className='w-full' type='text' id="password" 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)} required
                            />
                        </div>
                        <div className=' py-2  w-3/5 flex justify-between  '>
                            <button className='bg-blue-300 rounded-md pl-2 pr-2  hover:text-white  ' type='submit' onClick={handleLogin} ><Link to="/Index" >Login </Link></button>
                            <button className='bg-blue-300 rounded-md pl-2 pr-2  hover:text-white  ' >logout</button>
                        </div>
                        {message && <p style={{marginTop:"10px"}}>{message}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}
