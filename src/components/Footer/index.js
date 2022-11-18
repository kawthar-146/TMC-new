import React from 'react'
import "./footer.css"
import img1 from '../../assets/blue logo ..jpg'
import { FaInstagram,FaLinkedin,FaFacebookF,FaTwitterSquare } from 'react-icons/fa';
const Footer = () => {
  return (
   <>
   <footer class="bg-white body-font">
  <div class="kokof container px-5 pt-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h4 class="font-bold tracking-wider text-sm mb-3 uppercase">phone</h4>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">+961-03 886 648</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h4 class="font-bold tracking-wider text-sm mb-3 uppercase">email</h4>
        <nav class="list-none mb-10">
          <li class="flex flex-col">
            <a class="text-gray-600 cursor-pointer hover:text-indigo-600">info@tmc.com.lb</a>
            <span class="inline-flex mt-14 gap-5 justify-center">

              <a class="text-gray-500 cursor-pointer hover:text-indigo-600">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="text-gray-500 cursor-pointer hover:text-indigo-600">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="text-gray-500 cursor-pointer hover:text-indigo-600">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h4 class="font-bold tracking-wider text-sm mb-3 uppercase">address</h4>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Zahrani Highway Saïda, Lebanon</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
</footer>
   <div className='footer'>
    <div class="footer-sec">
    <div class="main">
      
      
      <div class="logo row">
        <div class="footer-header">
          <img src={img1}class="manik" alt=""/>
        </div>
        <div class="logo-des">
          <p>You name it, we make it...as long as it's STEEL!!!</p>
          
          <a href="#" class="btn-know">Know More</a>
        </div>
        
        
      </div>
      
      
      
      <div class="office row">
        <div class="footer-header">
          <h3>Office</h3>
        </div>
        <div class="office-des">
          <p>here we are <br/> at Zahrani Highway Saïda, Lebanon<br/>always <br/>available</p>
          
         <a href="#">info@tmc.com.lb</a>
          
          <p class = "num">+961-03 886 648</p>
        </div>
      </div>
      
      
      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div>
        
        <div class="link-des">
          <a href="#" class="footer-links">Home</a>
          <a href="#" class="footer-links">About</a>
          <a href="#" class="footer-links">Services</a>
          <a href="#" class="footer-links">Projects</a>
          <a href="#" class="footer-links">Contact</a>
        </div>
        
      </div>
      
      
      <div class="newsletter row">
        <div class="footer-header">
          <h3>Newsletter</h3>
        </div>
        <div class="newsletter-des">
          <div class="subcribe"><i class="sub-icon ri-mail-check-fill"></i>
            <input type="mail" placeholder = "Enter Email ID" required/>
            <i class="sub-icon ri-arrow-right-line"></i>
          </div>
          <div class="icons">
            <a href="#"><i class="social-icon"><FaFacebookF/></i></a>
            <a href="#"><i class="social-icon"><FaInstagram/></i></a>
            <a href="#"><i class="social-icon "><FaLinkedin/></i></a>
            <a href="#"><i class="social-icon"><FaTwitterSquare/></i></a>
            
          </div>
        </div>
      </div>
      
      
    </div>
    <div class="copyright">
    <hr/>
    
    <p>© Copyright 2022 TMC .</p>
    </div>
  </div>
  </div>
   </>
  )
}

export default Footer