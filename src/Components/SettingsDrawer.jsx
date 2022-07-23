import React from 'react';

import { Box } from '@mui/material';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';

function SettingsDrawer( { DrawerOpen, CloseDrawerFunction } ) {
    

  return (
    <Drawer anchor='right' open={ DrawerOpen } onClose={ CloseDrawerFunction } >
        <Box p={ 2 } width='250px' textAlign='center' role='presentation' >
            <Typography variant='h6' component='div' >
                Settings
            </Typography>
        </Box>
    </Drawer>
  )
}

export default SettingsDrawer;