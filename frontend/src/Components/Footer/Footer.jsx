import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import twitter from '../Assets/pintester_icon.png'
import linkedin from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>STYLE</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Career</li>
        <li>Blog</li>
       </ul>
       <div className='footer-social-icon'>
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
       </div>
         <div className='footer-copyright'>
            <hr />
            <p>Copyright @2024 - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
