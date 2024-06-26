import {React, useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import Footer from '../../components/Footer/Footer'
import {login, signup} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

   const [signState, setSignState] = useState('Sign In');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const [loading, setLoading] = useState(false);

   const user_auth = async (event) =>{
    event.preventDefault();
    setLoading(true);
    if(signState==='Sign In'){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
    setLoading(false);
    navigate('/home');
   }

  return (
    loading?<div className="login-spinner"> <img src={netflix_spinner} alt="loading" /> </div> : <>
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==='Sign Up'? <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Username'/>: <></>}
           <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email Address' />
           <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password' />
           <button onClick={user_auth} type='submit'>{signState}</button> 
           <div className="form-help">
             {signState==='Sign In'? <p><a href="#">Forgot password?</a></p>: <p onClick={()=>{setSignState('Sign In')}}><a href="#">Already have account?</a></p>}
            <div className="btn-bottom">
              <div className='remember'>
              <input type="checkbox"/>
              <label htmlFor=''>Remember Me</label>
              </div>
              {signState==='Sign In'?  <div className="signup-advice"><p onClick={()=>{setSignState('Sign Up')}}>New to Netflix? <a href="#">Sign up now</a></p>
              </div>: <></>}
            </div>
            <div className='extra-info'>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#'>Learn more.</a> </p>
            </div>
           </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login
