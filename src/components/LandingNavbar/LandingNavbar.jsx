import React, {useState} from 'react'
import logo from '../../assets/images/transparentLogo.png'
import './landingNavbar.css'
import menuIcon from '../../assets/images/menuIcon.svg'
import menuXIcon from '../../assets/images/menuXIcon.svg'
import { Link } from 'react-router-dom'
import styles from './LandingNavbar.module.css'

const Navbar = () => {
    const [showNav, setShowNav] = useState(true)
    const handleNav = () => {
        setShowNav(prevShowNav => !prevShowNav)
    }
  return (
      <>
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                <Link to="/" ><div className={styles.logo}>
                    <img src={logo} alt="/" />
                    </div></Link>
                    <div onClick={handleNav}  className='menu_btn'>
                    {showNav ? (<img className={styles.icon} src={menuIcon} alt="/"/>): (<img className={styles.icon} src={menuXIcon} alt="/"/>)} 
                    </div>
                    <ul className={styles.apply}>
                        <Link to='/student-ambassador'><li  className="nav__links">Student Ambassador</li></Link>
                        <Link to='/'><li className='nav__links'>Support</li></Link>
                        <Link to='/login'><li className='nav__links'>Login</li></Link>
                        <Link to='/signup'><li className='nav__links'>Create Account</li></Link>
                    </ul>
                </nav>
            </div>

    
</header>

{/* for mobile devices */}
<header className='mobile__header'>
    <nav style={{height: showNav?'0%':'100%',transition:'.01s ease-in'}} className='mobile__nav-container'>
            <img onClick={() => setShowNav(!showNav)} className={`${styles.icon} mobileIcon`} src={menuXIcon} alt="/"/>
           <ul className='mobile__ul'>
                <Link to='/student-ambassador'><li onClick={()=>setShowNav(true)} className='nav__linksMobile'>Student Ambassador</li> </Link>
                <Link to='/'><li className='nav__linksMobile' onClick={()=>setShowNav(true)}>Support</li> </Link>
                <Link to='/login'><li onClick={()=>setShowNav(true)} className='nav__linksMobile'>Login</li> </Link>
                <Link to='/signup'><li onClick={()=>setShowNav(true)} className='nav__linksMobile'>Create Account</li> </Link>
                
            </ul>
            
    </nav>
  
    </header>
</>
  )
}

export default Navbar
