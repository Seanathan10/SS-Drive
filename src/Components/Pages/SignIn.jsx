import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext.js';

import ModalPopup from '../Modal.jsx';

const SignIn = () => {
  const [ Email, SetEmail ] = useState('');
  const [ Password, SetPassword ] = useState('');

  const [ ModalOpen, SetModalOpen ] = useState();
  const [ ModalTitle, SetModalTitle ] = useState( '' );
  const [ ModalMessage, SetModalMessage ] = useState( '' );

  function CloseModal() {
    SetModalOpen( false );
  }

  const Navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    const AllClear = [ 0, 0, 0, 0 ];

    e.preventDefault();

    if( Email === '' ) {
      SetModalTitle( 'Email error' );
      SetModalMessage( 'No email provided' );
      SetModalOpen( true );
      AllClear[ 0 ] = 1;
    } else if( !Email.includes( '@' ) && !Email.includes( '.' ) ) {
      SetModalTitle( 'Email error' );
      SetModalMessage( 'Invalid email address' );
      SetModalOpen( true );
      AllClear[ 1 ] = 1;
    }
    
    if( Password === '' ) {
      SetModalTitle( 'Password error' );
      SetModalMessage( 'No password provided' );
      SetModalOpen( true );
      AllClear[ 2 ] = 1;
    } else if( Password.length < 7 ) {
      SetModalTitle( 'Password error' );
      SetModalMessage( 'Password cannot be less than 8 characters. Please try again.' );
      SetModalOpen( true );
      AllClear[ 3 ] = 1;
    }

    if( AllClear[ 0 ] === 0 && AllClear[ 1 ] === 0 && AllClear[ 2 ] === 0 && AllClear[ 3 ] === 0 ) {
      try {
        console.log( AllClear );
        await signIn( Email, Password )
        Navigate( '/dashboard' )
      } catch ( e ) {
          console.log( e.message )
      }
    }
      

    

    
  };

  return (
    <div>
      <ModalPopup ModalTitle={ ModalTitle } ModalMessage={ ModalMessage } IsModalOpen={ ModalOpen } CloseModalFunction={ CloseModal } ></ModalPopup>

      <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
          <p className='py-2'>
            Don't have an account yet?{' '}
            <Link to='/signup' className='underline'>
              Sign up.
            </Link>
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input onChange={(e) => SetEmail(e.target.value)} className='border p-3' type='email' />
          </div>
          
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input onChange={(e) => SetPassword(e.target.value)} className='border p-3' type='password' />
          </div>
          
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
            Sign In
          </button>
        
        </form>

      </div>
    </div>
  );
};

export default SignIn;
