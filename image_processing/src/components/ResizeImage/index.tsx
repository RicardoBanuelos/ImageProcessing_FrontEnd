import { useState, useEffect } from 'react'

import { Box, Button, CardMedia } from '@mui/material'
import NumberField from '../NumberField'

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

    return ( 
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CardMedia
                    component='img'
                    image={imageUrl!}
                    alt='uploaded image'
                    height='600px'
                    sx={{ maxWidth: '80%', width: '100%', objectFit: 'contain' }}
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
                >
                    Resize!
                </Button>
            </Box>
        </>
    )
    
}

export default ResizeImage;