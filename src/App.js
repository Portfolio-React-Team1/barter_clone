import './App.css'
import Landing from '../src/pages/landing_page/Landing'
import Signup from '../src/pages/Create_account/Signup'
import Login from '../src/pages/Login/Login'
import Ambassador from '../src/pages/student_ambassador/Ambassador'
import Logo from '../src/assets/images/logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <nav className='navbar'>
          <div>
            <img style={{width:'200px', height:'50px'}} src={Logo} alt='Barter logo'></img>
          </div>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/student-ambassador'>Student Ambassador</Link>
            <Link to='/signup'>Create Account</Link>
            <Link to='/login'>Login</Link>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/student-ambassador' element={<Ambassador />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
