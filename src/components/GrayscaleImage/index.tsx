import './index.css'

import { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'

import GrayscaleImageAPI from '../../api/GrayscaleImage'
import downloadBase64Image from '../../features/DownloadImage/DownloadBase64Image'

interface Props {
    image: File | null
}

function GrayscaleImage({image} : Props) {
    const [imageUrl, setImageUrl] = useState<string | null>("0")

    useEffect(() => {
        const objectUrl = URL.createObjectURL(image!)
        setImageUrl(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    async function callBlurImage() {
        const response = await GrayscaleImageAPI(image!)
        downloadBase64Image(response.data.image, image!.name)
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img
                    className='responsive_image'
                    src={imageUrl!}
                />
            </Box>
            <Box
                component="form" 
                sx={{ marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    variant='contained'
                    onClick={callBlurImage}
                >
                    Grayscale
                </Button>
            </Box>
        </>
    );
}

export default GrayscaleImage;