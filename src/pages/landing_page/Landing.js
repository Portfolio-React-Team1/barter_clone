import React from 'react'
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar'
import homepageImage from '../../assets/background_images/homepage.svg'
import TopNav from '../../components/MainTopNav/TopNav'

const Landing = () => {
  return (
    <div style={{width:'100%' ,height: '100%'}}>
        <div style={{
          position:'absolute',
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          backgroundImage: `url(${homepageImage})`,
          backgroundSize: 'cover',
          backgroundPosition:'center center',
          }}>
            <TopNav />
            <LandingNavbar />
           
        </div>
    </div>
  )
}

export default Landing