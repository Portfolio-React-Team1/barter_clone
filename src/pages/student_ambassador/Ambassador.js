import React from 'react'
import './Ambas.css'
import { useEffect } from 'react';
import Ambas1 from '../../assets/images/ambassador-1.png';
import Ambas2 from '../../assets/images/ambassador-2.png';
import Ambas3 from '../../assets/images/ambassador-3.png';
import Ambas4 from '../../assets/images/ambassador-4.png';
import Ambas5 from '../../assets/images/ambassador-5.png';

console.log(Ambas1);

const Ambassador = () => {
  useEffect(() => {
    let newTitle = 'Earn up to $1500 as a Barter ambassador.';
    if (document.title !== newTitle)
      document.title = newTitle
  }, [])

  return (
    <>
    <main id='hero'>
        <section className='hero-left'>
        <h1>Earn up to <span>$1500</span> as a Barter ambassador.</h1>
        <p>Do you already tell your friends about Barter? Well, it's time to get rewarded.</p>
        <button className='hero-btn'><a href='#hero'>Apply Now</a></button>
        </section>

        <section className='hero-right hero-images'>
                <div className='img-div-1'><img className='img-1' src={Ambas1} alt='smiling girl'></img></div>
                <div><img src={Ambas2} alt='smiling girl'></img></div>
                <div><img src={Ambas3} alt='smiling girl'></img></div>
                <div><img src={Ambas5} alt='smiling girl'></img></div>
                <div><img src={Ambas4} alt='smiling girl'></img></div>
        </section>
    </main>

    <section className='Ambas-program'>
        <h2>What is the Barter ambassador program?</h2>
        <p>The <span className='barter-text'>Barter</span> Student Ambassador Program is an exclusive community of young, smart, and influential students in some of the leading universities across the world such as Princeton University, University of Cape Town, Ashesi University, University of Nairobi, University of Lagos, and Kwame Nkrumah University of Science and Technology, among others.</p>
    </section>
    </>
  )
}

export default Ambassador