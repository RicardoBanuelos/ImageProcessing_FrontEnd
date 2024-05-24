import { 
    AppBar,
    Icon,
    IconButton,
    styled,
    Toolbar 
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

const StyledAppBar = styled(AppBar)({
    backgroundColor: "#212121",
    height: "3rem",
})

const NavBar = () => {
    return (
        <StyledAppBar position='static'>
            <Toolbar variant='dense'disableGutters>
                <IconButton>
                    <HomeIcon fontSize='medium' sx={{
                        color: 'white'
                    }}/>
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    )
}

export default NavBar