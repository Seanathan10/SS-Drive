import React from 'react';
import SignIn from './Components/Pages/SignIn.jsx';
import SignUp from './Components/Pages/SignUp.jsx';

import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/Pages/Dashboard';
import Account from './Components/Pages/Account.jsx';

import LandingPage from './Components/Pages/LandingPage/LandingPage.jsx';

function App() {
  return (
      <AuthContextProvider>
        <Routes>


          <Route path='/' element={ <LandingPage/> } />
          <Route path='/signup' element={ <SignUp/> } />
          <Route path='/login' element={ <SignIn/> } ></Route>
          
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          ></Route>
          
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account/>
              </ProtectedRoute>
            }
          ></Route>


        </Routes>    
      </AuthContextProvider>
  );
}

export default App;
