import React from 'react';
import { useRef } from 'react';
import '../../App.css';
// import { useAuth } from '../Context/AuthContext.js';

import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { Stack } from '@mui/material';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import SignedOutBar from '../AppBars/SignedOutBar';


const EmailTextField = styled (TextField ) ( {
    // color of the text being entered
    '& input': {
        color: 'white',
    },

    // colour of the text when not focused
    '& label': {
        color: '#cfcfcf',
    },

    // colour of the text that moves to the top
    '& label.Mui-focused': {
      color: 'white',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },

    '& .MuiOutlinedInput-root': {
        // outline colour when nothing is happening
      '& fieldset': {
        borderColor: 'white',
      },
        // outline colour when hovering
      '&:hover fieldset': {
        borderColor: 'grey',
      },
      // outline colour when focused
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
});

const PasswordTextField = styled( TextField ) ( {
    // colour of the text being entered
    '& input': {
        color: 'white',
    },
    
    // colour of the text when not focused
    '& label': {
        color: '#cfcfcf',
    },

    // colour of the text that moves to the top
    '& label.Mui-focused': {
      color: 'white',
    },


    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },

    '& .MuiOutlinedInput-root': {
        // outline colour when nothing is happening
      '& fieldset': {
        borderColor: 'white',
      },
        // outline colour when hovering
      '&:hover fieldset': {
        borderColor: 'grey',
      },
      // outline colour when focused
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
});

// function SignUp( props ) {
//     const { classes } = props;

export default function SignUp() {
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const ConfirmPassRef = useRef();

  // const { UserSignUp } = useAuth();

  // function SubmissionHandler( Event ) {
  //   Event.preventDefault();

  //   UserSignUp( EmailRef.current.value, PasswordRef.current.value )
  // }

  const [ ShowPassword, SetShowPassword ] = useState( false );
  const HandleClickShowPassword = () => SetShowPassword( !ShowPassword );
  const HandleMouseDownPassword = () => SetShowPassword( !ShowPassword );

  return (
    <div>
      <SignedOutBar></SignedOutBar>
      <div className='CentreEverything'>
        <div className='MainContentWrapper'>
            <div className='ActualMainContent'>
                <div className='StackedContent'>
                    
                    {/* <TextField label="Outlined" variant="outlined" color='success'/> */}

                    <Stack spacing={ 3 } direction='column'>
                        <h1 className='SignIOText'>Sign Up</h1>
                        
                        <EmailTextField inputRef={ EmailRef } label="Email address"></EmailTextField>


                        <PasswordTextField
                            inputRef={ PasswordRef }
                            label="Password"
                            type={ ShowPassword ? "text" : "password" }
                            InputProps={ { // password visibility toggle
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={HandleClickShowPassword}
                                    onMouseDown={HandleMouseDownPassword}
                                    >
                                    { ShowPassword ? <Visibility /> : <VisibilityOff /> }
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                        ></PasswordTextField>
                        
                        
                        <PasswordTextField
                            inputRef={ ConfirmPassRef }
                            label="Confirm Password"
                            type={ ShowPassword ? "text" : "password" }
                            InputProps={{ // password visibility toggle
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={HandleClickShowPassword}
                                    onMouseDown={HandleMouseDownPassword}
                                    >
                                    {ShowPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                        ></PasswordTextField>
                        
                        <div>
                          <Button color='warning' >Sign Up</Button>
                        </div>
                        

                        <Button color='warning' >Already have an account? Click here to Sign In</Button>
                    </Stack>

                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

// export default withStyles( PaddingStyle ) ( SignUp );
// export default SignUp