import './App.css'
import Landing from '../src/pages/landing_page/Landing'
import Signup from '../src/pages/Create_account/Signup'
import Login from '../src/pages/Login/Login'
import Ambassador from '../src/pages/student_ambassador/Ambassador'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
     <Router>
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
