import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Element } from 'react-scroll';
import Login from './pages/login/login';
import Main from './pages/home/main';
import Register from './pages/register/register';

 
function App() {
  return (
    <Router>
      <Routes>  
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
