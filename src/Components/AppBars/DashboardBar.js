import React from "react";

import { Box } from "@mui/material";
// import { Menu } from "@mui/material";
import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { InputBase } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import HelpIcon from '@mui/icons-material/Help';
import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useNavigate } from "react-router-dom";
import { UserAuth } from '../../Context/AuthContext';


const Search = styled( 'div' ) (({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha( theme.palette.common.black, 0.15 ),

    '&:hover': {
      backgroundColor: alpha( theme.palette.common.black, 0.35 ),
    },

    '&:focused': {
        backgroundColor: alpha( theme.palette.common.black, 0.35 ),
    },

    marginRight: 2,

}));
  
const SearchIconWrapper = styled('div') (({ theme }) => ({
    padding: theme.spacing( 0, 1.5 ),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled( InputBase ) (({ theme }) => ({
    color: 'inherit',

    '& .MuiInputBase-input': {
      padding: theme.spacing( 1, 1, 1, 0 ),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc( 1em + ${ theme.spacing( 4 ) } )`,
      transition: theme.transitions.create( 'width' ),
      width: '100%',
    },
}));
  

export default function DashboardBar() {
    const { user, logout } = UserAuth();
    
    const HandleLogout = async () => {
        try {
          await logout();
          Navigate( '/' );
          console.log( 'Sign out' )
        } catch ( e ) {
          console.log( e.message );
        }
      };

    const Navigate = useNavigate();

  return (
    <div>
        <Box sx={ { flexGrow: 1 } } >
            <AppBar position='static'>
                <Toolbar>


                    <IconButton
                        size='large'
                        edge='start'
                        aria-label="Dashboard menu button"
                        style={ { color: "#ffffff" } }
                        sx={ { mr: 1.5 } }
                    >
                        <MenuIcon style={ { color: '#ffffff' } }></MenuIcon>
                    </IconButton>

                    <Typography
                        variant='h6'
                        noWrap
                        sx={ {  } }
                    >
                        SS-Drive
                    </Typography>


                    <Box sx={ { flexGrow: 1 } } ></Box>


                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>


                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={ { 'aria-label': 'Search' } }
                        />
                    </Search>


                    <Box sx={ { flexGrow: 1 } }></Box>





                    <IconButton
                      size="large"
                      edge="end"
                      onClick={ () => alert( 'Help button' ) }
                      color="inherit"
                      sx={ { mr: 0.1 } }
                    >
                      <HelpIcon/>
                    </IconButton>
                    
                    <IconButton
                      size="large"
                      edge="end"
                      onClick={ () => alert( 'Settings button' ) }
                      color="inherit"
                      sx={ { mr: 0.1 } }
                    >
                      <SettingsIcon/>
                    </IconButton>

                    
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      onClick={ () => Navigate( '/account' ) }
                      color="inherit"
                    >
                      <AccountCircleIcon/>
                    </IconButton>


                    <Button
                        sx={ { ml: 3 } }
                        variant="contained"
                        onClick={ () => HandleLogout() }
                        endIcon={ <LogoutIcon/> }
                        style={ { color: '#3873cb', backgroundColor: '#ffffff' } }
                    >
                        Logout
                    </Button>



                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}
