import { useState } from 'react';
import { useEffect } from 'react';
import { Authentication } from '../../Firebase.js';

import AuthContext from './AuthContext.js';

export default function AuthProvider( { Children } ) {
    const [ CurrentUser, SetCurrentUser ] = useState();
    
    function UserSignUp( UserEmailAddress, UserPassword ) {
      return Authentication.createUserWithEmailAndPassword( UserEmailAddress, UserPassword );
    }  
    
    useEffect( () => {
      const Unsub = Authentication.onAuthStateChanged( User => {
          SetCurrentUser( User );
      } )
  
      return Unsub;
    }, [] )
  
   
  
    const Value = { CurrentUser, UserSignUp };
    
    return (
      <AuthContext.Provider value={ Value } >
          { Children }
      </AuthContext.Provider>
    )
  }
  
  