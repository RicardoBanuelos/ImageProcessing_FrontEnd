import { 
    AppBar,
    Icon,
    IconButton,
    styled,
    Toolbar 
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

const StyledAppBar = styled(AppBar)({
    backgroundColor: "#01579b",
    height: "4rem",
})

const NavBar = () => {
    return (
        <StyledAppBar position='static'>
            <Toolbar disableGutters>
                <IconButton>
                    <HomeIcon fontSize='large' sx={{
                        color: 'white'
                    }}/>
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    )
}

export default NavBar