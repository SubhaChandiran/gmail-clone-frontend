import { Box, Typography, Checkbox, styled } from "@mui/material";
import { Star, StarBorder } from '@mui/icons-material'


const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background: '#f2f6fc',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > div': {
        display: 'flex',
        width: '100%',
        '& > p': {
            fontSize: 14
        }
    }
});

const Indicator = styled(Typography)({
    fontSize: '12px !important',
    background: '#ddd',
    color: '#222',
    padding: '0 4px',
    borderRadius: 4,
    marginRight: 6
});

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368',
})

const Email = ({ email, selectedEmails }) => {
    return (
        <Wrapper>
            <Checkbox
                size='small'
                checked={selectedEmails.includes(email._id)}
            />
            <StarBorder fontSize='small' style={{ marginRight: 10 }} />
            <Box>
                <Typography style={{ width: 200, overflow: 'hidden' }} >{email.name}</Typography>
                <Indicator>Inbox</Indicator>
                <Typography>{email.subject} {email.body && '-'} {email.body} </Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}
                    {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}
                </Date>
            </Box>    
        </Wrapper>
    )
}

export default Email;