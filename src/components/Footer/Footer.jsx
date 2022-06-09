import React from 'react'
import logo from '../../assets/images/transparentLogo.png'
import './footer.css'

const Footer = () => {
    const legal = ['Privacy Policy', 'Terms & Conditions', 'Cookies Policy']
    const address1 = '1323 Columbus Avenue,San Francisco, CA 94133'
    const address2 = '8 Providence Street,Lekki Phase One'
    const product = ['Support center', 'Blog']
    const contacts = ['barterambassadors@flutterwavego.com','Twitter','Instagram']

  return (
    <footer className='footer__section'>
        <div className='footer__container'>
            <div className='footer__content'>
                <div className='footer__list'>
                    <img src={logo} alt="/" />
                </div>
                <div className='footer__list'>
                    <h2>Product</h2>
                    <ul>
                        {product.map((list, i) => (
                            <li key={i}>{list}</li>
                        ))}
                    </ul>
                </div>
                <div className='footer__list'>
                    <h2>Legal</h2>
                    <ul>
                        {legal.map((list, i) => (
                            <li key={i}>{list}</li>
                        ))}
                    </ul>
                </div>
                <div className='footer__list'>
                    <h2>Contact</h2>
                    <ul>
                        {contacts.map((list, i) => (
                            <li key={i}>{list}</li>
                        ))}
                    </ul>
                </div>
                <div className='footer__list'>
                    <h2>San Francisco</h2>
                    <ul>
                        <li>{address1}</li>
                    </ul>
                    <div>
                        <h2>Lagos</h2>
                        <ul>
                            <li>{address2}</li>
                        </ul>

                    </div>
                </div>
                
            </div>
            <p>© 2022 Flutterwave Inc. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer