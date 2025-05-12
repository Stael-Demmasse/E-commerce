import React from 'react'
import ReactDOM from 'react-dom/client'
import  facebook from './assets/facebook.svg';
import  twitter from './assets/twitter.svg';
import  instagram from './assets/instagram.svg';
import  userImg from './assets/user-icon.svg';
import  registerImg from './assets/edit.svg';
import  cartImg from './assets/cart.svg';
import  LogoImg from './assets/Samyra Brownies.jpg';
import PhoneImg from './assets/phone.svg';
import clockImg from './assets/clock.svg';
import './App.css'


function Header() {

 
  
  return (
    <header className="header">

      <div className="top-header">

          <img src= {facebook} alt="Facebook" className='icons'/>
          <img src= {twitter} alt="Twitter" className='icons'  />
          <img src= {instagram} alt="Instagram" className='icons'/>

          <div className="items-right">
          <img src={userImg} alt="User" className='icons1'/>
          <a href="#">Log in</a>
          <img src={registerImg} alt="registration" className='icons1'/>
          <a href="#">Register</a>
          <img src={cartImg} alt="Cart" className='icons1'/>
          <span className='cart-count'>0 items - ($(preis))</span>

          </div>

    	</div>

      <div className="end-header">

      <img src= {LogoImg} alt="log" className='icons2 anime'/>

      </div>

      <div className='contact'>

        <div className='phone-info'>
           <img src={PhoneImg} alt="Phone" />
           <span > <strong>call us: (+49) 123 456 789</strong></span>
        </div>
          <span> email: info@samyrabrownies</span>
     </div>
     
     <div className='contact1'>
       
        <div className='clock-info'>
           <div className='info'>
                <img src={clockImg} alt="time" className="clock-icon"/>
                <span > <strong>    Working Hours        </strong></span>
           </div>
           
           <span> Mon - Sat (9.00am - 15.00am) </span>
        </div>
         
     </div>
    
      <div className='bottom-header'>

        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Services</a></li>
          </ul>
          </nav>
      </div>

    
      
    </header>
  )
}



function App() {
 
  return (
      <div>
        <Header />


      </div>
  );
}

export default App