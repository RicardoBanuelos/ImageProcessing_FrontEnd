import './Home.css'

import Stack from '@mui/material/Stack'

import HomeButton from '../../components/HomeButton/HomeButton'

const Home = () => {
    return (
        <>
            <div className="title_div">
                <p className="title_p">
                    Image Processing
                    <p className="welcome_message_p">
                        A simple website to process your images!
                    </p>
                </p>
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