import './App.css';

// import AuthProvider from './Components/Context/AuthProvider';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Dashboard from './Components/Pages/Dashboard';
import SignUp from './Components/Pages/SignUp.js';
import LandingPage from './Components/Pages/LandingPage';
import LoginPage from './Components/Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>

      <div>

        <>

          <Routes>
            <Route path='/' element={ <LandingPage/> } ></Route>
            <Route path='/register' element={ <SignUp/> } ></Route>
            <Route path='/dashboard' element={ <Dashboard/> } ></Route>
            <Route path='/login' element={ <LoginPage/> } ></Route>
          </Routes>
        
        </>

      </div>

    </BrowserRouter>
  );
}

export default App;
