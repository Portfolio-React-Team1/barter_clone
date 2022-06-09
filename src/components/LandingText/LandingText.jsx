import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'
import './landingText.css'

const LandingText = () => {
  return (
    <div className='landingText__container'>
        <div className='landing__container'>
                <div className='landingText__content'>
                    <h1 className='landing__h1'>Be truly borderless</h1>
                    <p className='landing__text'>Send and receive money globally. Create virtual dollar cards that work anywhere online.</p>
                </div>
        <div>
                <div className='landing__apps'>
                    <a href="/"><FaGooglePlay  className="icon" />Google</a>
                    <a href="/"><AiFillApple  className="icon"/>Apple</a>
                </div>
                <div className='landing__dot'>
                    <div className='dot1'></div>
                    <div className='dot2'></div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default LandingText