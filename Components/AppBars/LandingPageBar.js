import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { useNavigate } from 'react-router-dom'


export default function LandingPageBar() {
    let UserAgent = navigator.userAgent;
    let BrowserName;

    if( UserAgent.match( /chrome|chromium|crios/i ) ) {
      BrowserName = "Chrome";
    } else if( UserAgent.match( /firefox|fxios/i ) ) {
      BrowserName = "Firefox";
    } else if( UserAgent.match( /safari/i ) ) {
      BrowserName = "Safari";
    } else if( UserAgent.match( /opr\//i ) ) {
      BrowserName = "Opera";
    } else if( UserAgent.match( /edg/i ) ) {
      BrowserName = "Edge";
    } else {
      BrowserName="[ Browser detection failed ]";
    }

    const Navigate = useNavigate();

    const [ PositionY, SetPositionY ] = useState( document.scrollingElement.scrollHeight );
    
    const [ DidUserScroll_Overview, SetDidUserScroll_Overview ] = useState( false );
    const [ DidUserScroll_Features, SetDidUserScroll_Features ] = useState( false );
    const [ DidUserScroll_Privacy, SetDidUserScroll_Privacy ] = useState( false );
    const [ DidUserScroll_Pricing, SetDidUserScroll_Pricing ] = useState( false );



    const ScrollDetection = useCallback( ( Event ) => {

        if( PositionY !== window.scrollY ) {
            SetDidUserScroll_Overview( false );
            SetDidUserScroll_Features( false );
            SetDidUserScroll_Privacy( false );
            SetDidUserScroll_Pricing( false );
        }

        // ====================================================================================
        // ====================================================================================
        // CREATE AN IF STATEMENT HERE TO WATCH THE SCROLL POSITION AND HIGHLIGHT BUTTONS
        // ====================================================================================
        // ====================================================================================

        if( window.scrollY > 780 && window.scrollY < 1550 ) {
            SetDidUserScroll_Overview( true );
        } else if( window.scrollY > 1550 && window.scrollY < 2000 ) {
            SetDidUserScroll_Features( true );
        } else if( window.scrollY > 2438 && window.scrollY < 3000 ) {
            SetDidUserScroll_Privacy( true );
        }

/*
        if( PositionY > window.scrollY ) {
            console.log( "U -> " + PositionY );
        } else if( PositionY < window.scrollY ) {
            console.log( "D -> " + PositionY );
        }
*/

        SetPositionY( window.scrollY )

        console.log( window.scrollY );

      }, [ PositionY ]);
    
    
    useEffect( () => {
        window.addEventListener( "scroll", ScrollDetection );

        return () => {
            window.removeEventListener( "scroll", ScrollDetection );
        };
    }, [ ScrollDetection ]);



    


    function OverviewButtonClicked() {
        if( BrowserName !== "Chrome" ) {
            window.scroll( {
                top: 922,
                left: 922,
                behavior: "smooth"
            } )
        } else {
            window.scroll( {
                top: 922,
                left: 922,
                // behavior: "smooth"
            } )
        }
        
    }

    function FeaturesButtonClicked() {
        // document.getElementById( 'Features' ).scrollIntoView( {
        //     behavior: "smooth"
        // } );

        if( BrowserName !== "Chrome" ) {
            window.scroll( {
                top: 1801,
                left: 1801,
                behavior: "smooth"
            } )
        } else {
            window.scroll( {
                top: 1801,
                left: 1801,
                // behavior: "smooth"
            } )
        }

        SetDidUserScroll_Features( true );
    }

    function PrivacyButtonClicked() {
        if( BrowserName !== "Chrome" ) {
            window.scroll( {
                top: 2631,
                left: 2631,
                behavior: "smooth"
            } )
        } else {
            window.scroll( {
                top: 2631,
                left: 2631,
                // behavior: "smooth"
            } )
        }

        SetDidUserScroll_Privacy( true );
    }

    function PricingButtonClicked() {
        SetDidUserScroll_Pricing( true );
    }

    function MenuButtonClicked() {
        if( BrowserName !== "Chrome" ) {
            window.scroll( {
                top: 0,
                left: 0,
                behavior: "smooth"
            } )
        } else {
            window.scroll( {
                top: 0,
                left: 0,
                // behavior: "smooth"
            } )
        }
    }

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar color='transparent' elevation={ 10 } sx={ { backdropFilter: 'blur( 15px )' } }>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="Menu button"
                        sx={ { mr: 1.5 } }
                        onClick={ () => MenuButtonClicked() }
                        style={ { color: '#ffffff' } }
                    >
                        
                        <Menu style={ { color: '#242424' } } />

                    </IconButton>

                    <Typography style={ { color: '#242424' } } variant="h6" component="div" sx={ { mr: 3 } } >Welcome to SS-Drive</Typography>
                    
                    
                    
                    
                    {/* OVERVIEW */}
                        <Button
                            disabled={ DidUserScroll_Overview }
                            variant={ DidUserScroll_Overview ? "contained" : "outlined" }
                            sx={ { mr: 0.5, backgroundColor: 'transparent', borderColor: 'transparent' } }
                            onClick={ () => OverviewButtonClicked() } 
                        >Overview</Button>
                    

                    {/* FEATURES */}
                    <Button
                        disabled={ DidUserScroll_Features }
                        variant={ DidUserScroll_Features ? "contained" : "outlined" }
                        sx={ { mr: 0.5, backgroundColor: 'transparent', borderColor: 'transparent' } }
                        onClick={ () => FeaturesButtonClicked() }
                    >Features</Button>
                    
                    
                    {/* PRIVACY */}
                    <Button
                        disabled={ DidUserScroll_Privacy }
                        variant={ DidUserScroll_Privacy ? "contained" : "outlined" }
                        sx={ { mr: 0.5, backgroundColor: 'transparent', borderColor: 'transparent' } }
                        onClick={ () => PrivacyButtonClicked() }
                    >Privacy</Button>
                    

                    {/* PRICING */}
                    <Button
                        disabled={ DidUserScroll_Pricing }
                        variant={ DidUserScroll_Pricing ? "contained" : "outlined" }
                        sx={ { mr: 0.5, backgroundColor: 'transparent', borderColor: 'transparent' } }
                        onClick={ () => PricingButtonClicked() }
                    >Pricing</Button>


                    
                    <Typography style={ { color: '#242424' } } variant="h6" component="div" sx={ { flexGrow: 1 } }></Typography>

                    <Button variant='contained' color="secondary" onClick={ () => Navigate( '/login' ) } >Login</Button>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}
