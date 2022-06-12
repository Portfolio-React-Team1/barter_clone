import React from 'react'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import './landingFooter.css'

const LandingFooter = () => {
  return (
    <div className='landingFooter__container'>
        <div className='landingFooter__content'>
            <p>© 2020 All rights reserved.</p>
        <div className='landing__footer-flutter'> 
            <p>Built by Flutterwave</p>
            <div className='landing__footer-icons'>
            <a href="/"><AiOutlineTwitter /></a>
            <a href="/"><AiOutlineInstagram /></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LandingFooter