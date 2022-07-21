import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import '../../App.css';

import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import SignedOutBar from '../AppBars/SignedOutBar';

import { useNavigate } from 'react-router-dom';

const UsernameTextField = styled (TextField ) ( {
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


export default function SignUp() {
  const UsernameRef = useRef();
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const ConfirmPassRef = useRef();

  const Navigate = useNavigate();


  function SubmitSignUp( Event ) {
    // Event.preventDefault();

    if( PasswordRef.current.value === ConfirmPassRef.current.value ) {
      if( PasswordRef.current.value.length >= 6 ) {
        alert( 'Success' );
      } else {
        alert( 'Password must be at least 6 characters' );
      }
    } else {
      alert( "Passwords do not match" );
    }
  }


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

                    <Stack spacing={ 3 } direction='column'>
                        <h1 className='SignIOText'>Sign Up</h1>

                        <UsernameTextField inputRef={ UsernameRef } label="Username" ></UsernameTextField>
                        
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
                          <Button color='warning' onClick={ () => SubmitSignUp() } >Sign Up</Button>
                        </div>
                        

                        <Button color='warning' onClick={ () => Navigate( '/login' ) } >Already have an account? Click here to Sign In</Button>
                        
                        <div>
                          <Button color='warning' onClick={ () => alert( UsernameRef.current.value ) } >UsernameRef</Button>
                          <Button color='warning' onClick={ () => alert( EmailRef.current.value ) } >EmailRef</Button>
                          <Button color='warning' onClick={ () => alert( PasswordRef.current.value ) } >PassRef</Button>
                          <Button color='warning' onClick={ () => alert( ConfirmPassRef.current.value ) } >Pass2Ref</Button>
                        </div>
                        
                    </Stack>

                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

// export default withStyles( PaddingStyle ) ( SignUp );
// export default SignUp;