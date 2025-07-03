import logo from './logo.svg';
import './App.css';
import { useAuth } from './context/authContext';
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogInOut/Login';
import Index from './components/Index';
import Home from './components/Home';
import about from './components/about';


function App() {
  // const { login, user } = useAuth();
  // console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/index' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
       
      </Routes>


    </div>
  );
}

export default App;
