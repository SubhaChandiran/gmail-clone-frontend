import React from 'react'
import { Dialog, Box, Typography, styled, InputBase } from '@mui/material';
import { Close } from '@mui/icons-material';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#F2F6FC',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }
});

const RecipientWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 14,
        borderBottom:
    }
})

function 
ComposeMail() {
  return (
      <Dialog
          open={true}
          PaperProps={{sx: dialogStyle}}
      >
          <Header>
              <Typography>New Message</Typography>
              <Close fontSize='small'></Close>
          </Header>

          <RecipientWrapper>
              <InputBase placeholder='Recipients' />
              <InputBase placeholder='Subject' />
          </RecipientWrapper>

          <Box>
              Subject
          </Box>

    </Dialog>
  )
}


export default ComposeMail