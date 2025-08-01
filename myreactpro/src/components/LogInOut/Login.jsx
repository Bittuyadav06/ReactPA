import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Index from '../Index.jsx';
import { useAuth } from '../../context/authContext.js';
import {FaUser} from 'react-icons/fa'


export default function Login() {

    const { Login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

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
        navigate("/home")

    };


    return (
        <>
            
                <div className="w-screen justify-items-center  py-4  bg-black bg-opacity-30 h-screen content-center">
                    <div className='from md:w-[40%] lg:w-[40%] md:h-[50%] mt-4 border rounded-md bg-blue-200 place-content-center justify-items-center  '
                        onSubmit={handleLogin}>
                        <div className='md:w-[100px] align-center'>
                            {/* <span className='font-bold text-blue-700'><FaUser/></span>
                        <span className='font-bold text-blue-700'> Login</span> */}
                        <FaUser className='text-blue-700 '/> 
                        </div>
                          <div className='md:w-[100px] align-center'>
                                
                        <span className='font-bold text-blue-700'> Login</span>
                         
                        </div>
                        <div className='text-left'>
                            <label htmlFor="username" className='w-full text-left'>username</label>
                            <input className='w-full'
                                type='text'
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} required
                            />
                        </div>
                        <div className='text-left'>
                            <label htmlFor="password">password</label>
                            <input className='w-full' type='text' id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} required
                            />
                        </div>
                        <div className=' py-2  '>
                            <button className='bg-blue-300 rounded-md pl-2 pr-2 hover:text-white' type='submit'
                                onClick={handleLogin} ><Link to="/Index" >Login </Link></button>
                            {/* <button className='bg-blue-300 rounded-md pl-2 pr-2  hover:text-white'>logout</button> */}
                        </div>
                        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
                    </div>
                </div>
            
        </>
    )
}
