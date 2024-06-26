import React from 'react'
import './Land.css'
import language_icon from '../../assets/lang.svg'
import right_icon from '../../assets/right.svg'
import {useNavigate} from 'react-router-dom' ;

function Land() {
  
  const navigate = useNavigate();

  return (
    <div className="main"> 
        <nav>
            <div className='logo'><img src="../../assets/logo.png" alt=""/> </div>
             <div className='nav-left'>
              <button className='lang-btn'>
              <img src={language_icon} alt="" className='lang-icon'/>
                  <select className='lang-select'>
                    <option value="English" className='options'>English</option>
                    <option value="hindi" className='options'>Hindi</option>
                  </select>
               </button>
                <button className="btn btn-red-sm">Sign In</button>
             </div>
         </nav>
        <div className="box">
           
        </div>
        <div className="hero">
            <span>The biggest Indian hits. Ready to watch here from ₹ 149.</span>
            <span>Join today. Cancel anytime.</span> 
            <span>Ready to watch? Enter your email to create or restart your membership.</span>
            <div className='email-input-btn'>
                 <input type="text" placeholder="Email Address"/>
                <button className='btn red-btn' onClick={navigate('/login')}>Get Started 
                  <img src={right_icon} alt="" className='right-icon'/>
                 </button>
            </div>
        </div>
       <div className='separation'>
       </div> 
    </div> 
  )
}

export default Land
