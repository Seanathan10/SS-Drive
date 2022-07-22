import React from "react";
import { Modal } from "@mui/material";




/*
============== REQUIRED CODE TO USE THE MODAL IN ANOTHER FILE ================

const [ ModalOpen, SetModalOpen ] = useState();
const [ ModalTitle, SetModalTitle ] = useState( '' );
const [ ModalMessage, SetModalMessage ] = useState( '' );

function CloseModal() {
    SetModalOpen( false );
}

============== USAGE =================
SetModalTitle( 'Test title' );
SetModalMessage( 'Test message' );
SetModalOpen( true );
*/






import { Box } from '@mui/material';
import { Fade } from '@mui/material';
import { Button } from "@mui/material";
import { Backdrop } from '@mui/material';
import { Typography } from '@mui/material';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };
  

  function ModalPopup( { ModalTitle, ModalMessage, IsModalOpen, CloseModalFunction } ) {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={ IsModalOpen }
            closeAfterTransition
            BackdropComponent={ Backdrop }
            BackdropProps={ { timeout: 500 } }
        >
            <Fade in={ IsModalOpen }>
                <Box sx={ style } >
                    
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        { ModalTitle }
                    </Typography>
                    
                    <Typography id="transition-modal-description" sx={ { mt: 2 } } >
                        { ModalMessage } 
                    </Typography>

                    <Box sx={ { paddingTop: 1, paddingLeft: 40 } }>
                        <Button onClick={ CloseModalFunction } >Close</Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalPopup;