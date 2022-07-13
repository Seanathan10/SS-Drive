import React from 'react'

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import LandingPage from './MobileComponents/Pages/LandingPage';
import SignUp from './MobileComponents/Pages/SignUp';
import Dashboard from './MobileComponents/Pages/Dashboard';
import SignIn from './MobileComponents/Pages/SignIn';

export default function App_Mobile() {
  return (
    <BrowserRouter>

      <div>

        <>

          <Routes>
            <Route path='/' element={ <LandingPage/> } ></Route>
            <Route path='/register' element={ <SignUp/> } ></Route>
            <Route path='/dashboard' element={ <Dashboard/> } ></Route>
            <Route path='/login' element={ <SignIn/> } ></Route>
          </Routes>
        
        </>

      </div>

    </BrowserRouter>
  )
}
