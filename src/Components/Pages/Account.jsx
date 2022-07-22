import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const Navigate = useNavigate();

  const LogoutFunction = async () => {
    try {
      await logout();
      Navigate( '/' );
      console.log('Sign out')
    } catch( Error ) {
      console.log( Error.message );
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: { user && user.email }</p>
      
      
      <button onClick={ () => Navigate( '/dashboard' ) } >
        Back to Dashboard
      </button>
      
      <button onClick={ LogoutFunction } >
        Logout
      </button>

      
    </div>
  );
};

export default Account;
