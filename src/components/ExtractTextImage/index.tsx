import './index.css'

import { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'

import ExtractTextAPI from '../../api/ExtractText'

interface Props {
    image: File | null
}

function ExtractTextImage({image} : Props) {
    const [imageUrl, setImageUrl] = useState<string | null>("0")

    useEffect(() => {
        const objectUrl = URL.createObjectURL(image!)
        setImageUrl(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    async function callExtractText() {
        const response = await ExtractTextAPI(image!)
        const blob = new Blob([response.text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'extracted_text.txt');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                    onClick={callExtractText}
                >
                    Download Text
                </Button>
            </Box>
        </> 
    );
}

export default ExtractTextImage;