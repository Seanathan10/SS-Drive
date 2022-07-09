import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function SignedOutBar() {
    const Navigate = useNavigate();

    return(
        <Box sx={ { flexGrow: 1 } }>
            <AppBar color='transparent' elevation={ 0 }>
                    
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="Menu button"
                        sx={ { mr: 1.5 } }
                        onClick={ () => Navigate( '/' ) }
                        style={ { color: '#ffffff' } }
                    >
                        
                        <Menu style={ { color: '#ffffff' } } />

                    </IconButton>

                    <Typography style={ { color: '#ffffff' } } variant="h6" component="div" sx={ { flexGrow: 1 } }>SS Drive</Typography>
                
                    <Button variant='contained' color="inherit" onClick={ () => Navigate( '/login' ) } >Login</Button>
                
                </Toolbar>


            </AppBar>
        </Box>
    )
}
