import React, {useState} from 'react'
import logo from '../../assets/images/logo.png'
import './navbar.css'
import menuIcon from '../../assets/images/menuIcon.svg'
import menuXIcon from '../../assets/images/menuXIcon.svg'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [showNav, setShowNav] = useState(true)
    const handleNav = () => {
        setShowNav(prevShowNav => !prevShowNav)
    }
  return (
      <>
        <header className={styles.header}>
            <nav className={styles.nav}>
            <Link to="/" ><div className={styles.logo}>
                   <img src={logo} alt="/" />
                </div></Link>
                <div onClick={handleNav}  className='menu_btn'>
                   {showNav ? (<img className={styles.icon} src={menuIcon} alt="/"/>): (<img className={styles.icon} src={menuXIcon} alt="/"/>)} 
                </div>
                <ul className={styles.apply}>
                    <li  className={styles.barter}><a className={styles.anchor} href='/'>About Barter</a></li>
                    <li className='navbar__apply'>Apply Now</li>
                </ul>
            </nav>

    
</header>
<header className='mobile__header'>

<nav style={{height: showNav?'0%':'100%',transition:'.01s ease-in'}} className='mobile__nav-container'>

           <ul className='mobile__ul'>
                <li onClick={()=>setShowNav(true)} className='barter'><a className={styles.anchor} href='/'>About Barter</a></li>
                <li className='navbar__apply' onClick={()=>setShowNav(true)}>Apply Now</li>
            </ul>
            
    </nav>
  
    </header>
</>
  )
}

export default Navbar