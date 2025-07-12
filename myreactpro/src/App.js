import logo from './logo.svg';
import './App.css';
import { useAuth } from './context/authContext';
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogInOut/Login';
import Index from './components/Index';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  // const { login, user } = useAuth();
  // console.log(user);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/index' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/footer' element={<Footer/>}/>       
       
      </Routes>


    </div>
  );
}

export default App;
