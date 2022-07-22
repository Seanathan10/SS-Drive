import React from 'react';
import SignIn from './Components/Pages/SignIn.jsx';
import SignUp from './Components/Pages/SignUp.jsx';

import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/Pages/Dashboard';

function App() {
  return (
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/signup' element={ <SignUp/> } />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
  );
}

export default App;
