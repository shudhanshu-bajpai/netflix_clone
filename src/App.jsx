import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import Land from './pages/Land/Land'
import Player from './pages/Player/Player'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('logged in');
        navigate('/home');
      } else {
        console.log('logged out');
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
      <Route path='/' element={<Land/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
