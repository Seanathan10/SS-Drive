import React from 'react';

import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const Navigate = useNavigate();

  return (
    <div>
        MOBILE LOGIN PAGE

        <br></br>
        <br></br>

        <Button color='primary' variant='contained' onClick={ () => Navigate( '/' ) } >Home</Button>
        <Button color='primary' variant='contained' onClick={ () => Navigate( '/register' ) } >Register</Button>
        <Button color='primary' variant='contained' onClick={ () => Navigate( '/dashboard' ) } >Dashboard</Button>
        <Button color='primary' variant='contained' onClick={ () => Navigate( '/login' ) } >Login</Button>
    </div>
  )
}
