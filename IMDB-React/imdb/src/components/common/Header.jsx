
import { useState } from 'react';

import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { logoURL } from '../../constants/constant';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';


import HeaderMenu from './HeaderMenu';

const StyledToolBar = styled(Toolbar)`
background:black;
padding: 0 115px !important;
justify-content:space-between;
& > * {
    padding: 0 16px;
}
& > div{
    display: flex;
    align-item:center;
    cursor:pointer;
    & > p{
        font-weight:600;
        font-size:20px;
    }
}
& > p{
    font-weight:600;
    font-size:20px;
}
`

const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`
const Logo = styled('img')({
    width: 64,
})
const Header = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(null);
    }
    return (
        <div>
            <AppBar position='static'>
                <StyledToolBar>
                    <Logo src={logoURL} alt='logo' />
                    <Box onClick={handleClick}>
                        <Menu />
                        <Typography>Menu</Typography>
                    </Box>
                    <HeaderMenu open={open} handleClose={handleClose} />
                    <InputSearchField />
                    <Typography>IMDB<Box component='span'>Pro</Box></Typography>
                    <Box>
                        <BookmarkAdd />
                        <Typography>Watchlist</Typography>
                    </Box>
                    <Typography>Sign In</Typography>
                    <Box>
                        <Typography>EN</Typography>
                        <ExpandMore />
                    </Box>

                </StyledToolBar>
            </AppBar>
        </div>
    )
}



export default Header;