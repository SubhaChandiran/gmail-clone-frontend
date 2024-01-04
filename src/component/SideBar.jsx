import React from 'react';
import { Drawer, styled } from '@mui/material';

function SiderBar() {
  return (
    <>
      <Drawer
        anchor='left'
        open={true}
        hideBackdrop={true}
        ModalProps={{
          keepMounted: true
        }}
        variant='parsistent'
        sx={{
          '& .MuiDrawer-paper': {
            marginTop: '64px',
            width: 250,
            background: '#F5F5F5',
            borderRight: 'none',
            height: 'calc(100vh - 64px)'
          }
        }}
      >
        Helloooo
      </Drawer>
    </>
  )
}

export default SiderBar;