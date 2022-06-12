import React from 'react'
import './landing.css'
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar'
import homepageImage from '../../assets/background_images/homepage.svg'
import TopNav from '../../components/MainTopNav/TopNav'
import LandingText from '../../components/LandingText/LandingText'
import LandingFooter from '../../components/LandingFooter/LandingFooter'

const Landing = () => {
  return (
    <>
   
        <TopNav />
        <div className='landingPage__container' style={{backgroundImage: `url(${homepageImage})`}}>
            <LandingNavbar />
            <div style={{width:'100%', height:'60%'}}>
                  <LandingText />
            </div>
            <LandingFooter />
        </div>
 
    </>
  )
}

export default Landing