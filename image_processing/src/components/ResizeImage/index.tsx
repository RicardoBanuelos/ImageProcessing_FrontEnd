import { useState, useEffect } from 'react'

import { Box, Button, CardMedia } from '@mui/material'

import NumberField from '../NumberField'
import ResizeImageAPI from '../../api/ResizeImage'
import downloadBase64Image from '../../features/downloadImage/DownloadBase64Image'
import './index.css'

interface Props {
    image: File | null
}

function ResizeImage({image} : Props) {
    const [imageUrl, setImageUrl] = useState<string | null>("0")
    const [newWidth, setNewWidth] = useState<string>("100")
    const [newHeight, setNewheight] = useState<string>("100")

    useEffect(() => {
        const objectUrl = URL.createObjectURL(image!)
        setImageUrl(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    function validateDimensions() {
        const width = parseInt(newWidth)
        const height = parseInt(newHeight)

        return width >= 1 && width <= 20000 && height >= 1 && height <= 20000
    }

    async function callResizeImage() {
        if(!validateDimensions()) return

        const response = await ResizeImageAPI(image!, newWidth, newHeight)
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
                <NumberField
                    label='Width'
                    placeholder='100px'
                    number={newWidth}
                    setNumber={setNewWidth}
                    min={1}
                    max={20000}
                />
                <NumberField
                    label='Width'
                    placeholder='100px'
                    number={newHeight}
                    setNumber={setNewheight}
                    min={1}
                    max={20000}
                />
                <Button
                    variant='contained'
                    onClick={callResizeImage}
                >
                    Resize!
                </Button>
            </Box>
        </>
    )
    
}

export default ResizeImage;