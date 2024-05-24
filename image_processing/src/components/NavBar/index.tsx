import { 
    AppBar,
    IconButton,
    styled,
    Toolbar 
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
    backgroundColor: "#212121",
    height: "3rem",
})

const NavBar = () => {

    const navigator = useNavigate()

    return (
        <StyledAppBar position='static'>
            <Toolbar variant='dense'disableGutters>
                <IconButton onClick={() => {
                    navigator("/")
                }}>
                    <HomeIcon fontSize='medium' sx={{
                        color: 'white'
                    }}/>
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    )
}

export default NavBar