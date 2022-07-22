import React from 'react'

import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';

import './LandingPage.css';

import Divider from '../../Divider.js';

import PlaceholderPhoto from '../../../Images/Placeholder.png';
import SpeedPhoto from '../../../Images/Speed.png';
import PrivacyPhoto from '../../../Images/Privacy.png';

import LandingPageBar from '../../AppBars/LandingPageBar.js';

export default function LandingPage() {
    const Navigate = useNavigate();

  return (
    <div className='LandingPageWrapperDiv'>
      

      <AppBar>
        <LandingPageBar></LandingPageBar>
      </AppBar>

      <Toolbar></Toolbar>

      <div className='CentreEverything2' >
          <div className='StackedContent2'>

              <Box sx={ { mt: 8, mb: 2 } } >
                <img className='ImageFit Shadow' src={ PlaceholderPhoto } alt='the file browser' height={ 687 } width={ 1209 }/>
              </Box>


              <h1>SS-Drive provides simple, quick, and secure access to all your files</h1>

              <div className='CentreEverything3'>
                  <Button color='primary' variant='contained' onClick={ () => Navigate( '/' ) } sx={ { m: 1 } } >Home</Button>
                  <Button color='primary' variant='contained' onClick={ () => Navigate( '/signup' ) } sx={ { m: 1 } } >Register</Button>
                  <Button color='primary' variant='contained' onClick={ () => Navigate( '/dashboard' ) } sx={ { m: 1 } } >Dashboard</Button>
                  <Button color='primary' variant='contained' onClick={ () => Navigate( '/login' ) } sx={ { m: 1 } } >Login</Button>
              </div>

              <Divider></Divider>


              
              <Box sx={ { mt: 8, mb: 2, mr: 5, ml: 5 } } >
                <div className='SideToSide' id='Features'>

                  <img className='Shadow' src={ SpeedPhoto } alt='tachometer representing speed' height={ 720 } width={ 720 }/>

                  <div>
                    <h1>Rapid access to files with near-instant load times</h1>
                    <h1>OVERVIEW</h1>
                  </div>
                  

                </div>
              </Box>


              <Divider></Divider>
              
              {/* =============================================================================================== */}
              {/* =============================================================================================== */}
              {/* TODO -> ADD SCROLLING BEHAVIOUR TO THE APPBAR BUTTONS */}
              {/* =============================================================================================== */}
              {/* =============================================================================================== */}

              
              
              <Box sx={ { mt: 8, mb: 2, mr: 5, ml: 5 } } >
                <div className='SideToSide' id='Features'>

                  <img className='Shadow' src={ SpeedPhoto } alt='tachometer representing speed' height={ 720 } width={ 720 }/>

                  <div>
                    <h1>Rapid access to files with near-instant load times</h1>
                    <h1>FEATURES</h1>
                  </div>
                  

                </div>
              </Box>


              <Divider></Divider>



              <Box>
                <div className='SideToSide'>
                    <img src={ PrivacyPhoto } alt='very pricavy' height={ 820 } width={ 820 }/>

                    <div>
                        <h1>High privacy ensures the security of your files</h1>
                        <h1>PRIVACY</h1>
                    </div>

                </div>
              </Box>


              <Divider></Divider>





            </div>
          
      </div>
    </div>
  )
}
