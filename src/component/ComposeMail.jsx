import React from 'react'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
};

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
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    }
});

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px'
});

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
});

function ComposeMail({ openDialog, setOpenDialog }) {

    const config = {
            Host: "smtp.elasticemail.com",
            Username: "test12345@yopmail.com",
            Password: "93959C8A1C90C8233FF4741FC7FD39A66274",
            Port: 2525,
    }

    const closeComposeMail = (e) => {
        e.preventDefault();

        setOpenDialog(false);
    }

    const sendMail = (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                ...config,
                To: 'jerrysubash@gmail.com',
                From: "jerrysubash@gmail.com",
                Subject: "This is the subject",
                Body: "And this is the body"
            }).then(
                message => alert(message)
            );
        }
        

        setOpenDialog(false);
    }

  return (
      <Dialog
          open={openDialog}
          PaperProps={{sx: dialogStyle}}
      >
          <Header>
              <Typography>New Message</Typography>
              <Close fontSize='small' onClick = {(e) => closeComposeMail(e)} />
          </Header>

          <RecipientWrapper>
              <InputBase placeholder='Recipients' />
              <InputBase placeholder='Subject' />
          </RecipientWrapper>

          <TextField
              multiline
              rows={18}
              sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
          />
          <Footer>
              <SendButton onClick={(e) => sendMail(e)} >Send</SendButton>
              <DeleteOutline onClick={() => setOpenDialog(false)} />
          </Footer>

    </Dialog>
  )
}


export default ComposeMail