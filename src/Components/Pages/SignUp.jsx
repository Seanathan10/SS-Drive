import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import '../../App.css';
import ModalPopup from '../Modal.jsx';
import SignedOutBar from '../AppBars/SignedOutBar.js';
import { UserAuth } from '../../Context/AuthContext.js';




import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



// eslint-disable-next-line
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



const SignUp = () => {
  // eslint-disable-next-line
  const UsernameRef = useRef();
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const ConfirmPassRef = useRef();

  const [ ShowPassword, SetShowPassword ] = useState( false );
  const HandleClickShowPassword = () => SetShowPassword( !ShowPassword );
  const HandleMouseDownPassword = () => SetShowPassword( !ShowPassword );

  const [ ModalOpen, SetModalOpen ] = useState();
  const [ ModalTitle, SetModalTitle ] = useState( '' );
  const [ ModalMessage, SetModalMessage ] = useState( '' );

  function CloseModal() {
    SetModalOpen( false );
  }

  


  const Navigate = useNavigate();

  const { createUser } = UserAuth();

  const SubmitSignUp = async () => {
    let EmailAddress = EmailRef.current.value;
    if( EmailAddress.includes( '@' ) && EmailAddress.includes( '.' ) ) {
      if( PasswordRef.current.value === ConfirmPassRef.current.value ) {
        if( PasswordRef.current.value.length >= 8 ) {
          
          try {
            await createUser( EmailRef.current.value, PasswordRef.current.value );
            Navigate( '/dashboard' );
          } catch( Error ) {
            console.log( Error.message );
          }
          
          // alert( 'Success' );

        } else {
          // alert( 'Password must be at least 6 characters' );
          SetModalTitle( 'Password error' );
          SetModalMessage( 'Password must be at least 8 characters' );
          SetModalOpen( true );
        }
      } else {
        // alert( "Passwords do not match!" );
        SetModalTitle( 'Password error' );
        SetModalMessage( 'Passwords do not match. Please try again' );
        SetModalOpen( true );
      }
    } else {
      SetModalTitle( 'Email error' );
      SetModalMessage( 'Email address is not valid' );
      SetModalOpen( true );
    }
    
  };

  return (
    <div>
      <SignedOutBar></SignedOutBar>


      <ModalPopup ModalTitle={ ModalTitle } ModalMessage={ ModalMessage } IsModalOpen={ ModalOpen } CloseModalFunction={ CloseModal } ></ModalPopup>




      <div className='CentreEverything'>
        <div className='MainContentWrapper'>
            <div className='ActualMainContent'>
                <div className='StackedContent'>

                    <Stack spacing={ 3 } direction='column'>
                        <h1 className='SignIOText'>Sign Up</h1>

                        {/* <UsernameTextField inputRef={ UsernameRef } label="Username" ></UsernameTextField> */}
                        
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
                        
                        
                    </Stack>

                </div>
            </div>
          </div>
        </div>
    </div>

  );
};

export default SignUp;
