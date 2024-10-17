import './index.css'

import { 
    Stack,
    Typography 
} from '@mui/material'

import HomeButton from '../../components/HomeButton'

import { useNavigate } from 'react-router-dom'

function Home() {
    const navigator = useNavigate()

    return (
        <>
            <div className="title_div">
                <Typography variant="h2" textAlign={"center"}>
                    Image Processing
                    <Typography textAlign={"center"} marginTop={2}>
                        A simple website to process your images!
                    </Typography>
                </Typography>
            </div>
            <div className="buttons_div">
                <Stack spacing={4} direction="column">
                    <Stack spacing = {8} direction="row">
                        <HomeButton
                            onClick={() => {
                                navigator("/resize")
                            }}
                            text='Resize'
                        />
                        <HomeButton
                            onClick={() => {
                                navigator("/blur")
                            }}
                            text='Blur'
                        />
                        <HomeButton
                            onClick={() => {
                                navigator("/grayscale")
                            }}
                            text='Grayscale'
                        />
                    </Stack>
                    <Stack spacing = {8} direction="row">
                        <HomeButton
                            onClick={() => {
                                navigator("/extract")
                            }}
                            text='Extract Text'
                        />
                    </Stack>
                </Stack>
            </div>
        </>
    )
}

export default Home