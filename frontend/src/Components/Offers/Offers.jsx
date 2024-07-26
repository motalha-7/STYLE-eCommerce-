import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers__left'>
        <h1>OFFERS</h1>
        <div>
            <h1>GET</h1>
            <h1>EXCITING OFFERS</h1>
            <p>ONLY ON EXCLUSIVE PRODUCT</p>
        </div>
        <div className='offers-btn'>
            Shop Now
        </div>
      </div>
        <div className='offers__right'>
            <img src={exclusive_img} alt=""/>
        </div>
    </div>
  )
}

export default Offers
