import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { gmailLogo } from '../constants/constant';

const styledAppBar = styled(AppBar)({
    background: '#f5f5f5',
    boxShadow: 'none'
})

function Header() {
  return (
      <div>
          <styledAppBar className='styledAppBar' position='static'>
              <Toolbar>
                  <MenuIcon color='action' />
                  <img src={gmailLogo} alt='logo' />
              </Toolbar>
          </styledAppBar>
    </div>
  )
}

export default Header;