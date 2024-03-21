import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>𝓃𝑒𝓌 𝒶𝓇𝓇𝒾𝓋𝒶𝓁𝓈</h2>
        <div>
            <p>𝒞𝑜𝓁𝓁𝑒𝒸𝓉𝒾𝑜𝓃𝓈 </p>
            <p>𝒻𝑜𝓇 𝑒𝓋𝑒𝓇𝓎𝑜𝓃𝑒</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
