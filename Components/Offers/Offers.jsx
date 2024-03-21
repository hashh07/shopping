import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>𝐸𝓍𝒸𝓁𝓊𝓈𝒾𝓋𝑒 </h1>
        <h1>𝒪𝒻𝒻𝑒𝓇𝓈 </h1>
        <p>𝒪𝒩 𝐵𝐸𝒮𝒯 𝒮𝐸𝐿𝐿𝐸𝑅𝒮 𝒫𝑅𝒪𝒟𝒰𝒞𝒯𝒮</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
