import './index.css'

import { 
    Stack,
    Typography 
} from '@mui/material'

import HomeButton from '../../components/HomeButton'

const Home = () => {
    return (
        <>
            <div className="title_div">
                <Typography variant="h2" className="title_p">
                    Image Processing
                    <Typography className="welcome_message_p">
                        A simple website to process your images!
                    </Typography>
                </Typography>
            </div>
            <div className="buttons_div">
                <Stack spacing={4} direction="column">
                    <Stack spacing = {8} direction="row">
                        <HomeButton
                            text='Resize'
                        />
                        <HomeButton
                            text='TBD'
                        />
                        <HomeButton
                            text='TBD'
                        />
                    </Stack>
                    <Stack spacing = {8} direction="row">
                        <HomeButton
                            text='TBD'
                        />
                        <HomeButton
                            text='TBD'
                        />
                        <HomeButton
                            text='TBD'
                        />
                    </Stack>
                </Stack>
            </div>
        </>
    )
}

export default Home