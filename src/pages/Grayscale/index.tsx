import './index.css'

import {
    Typography
} from '@mui/material'

import UploadImageButton from '../../components/UploadImageButton'
import GrayscaleImage from '../../components/GrayscaleImage'

import { useState, useEffect } from 'react'

function Grayscale() {
    const [uploadedImage, setUploadedImage] = useState<File | null>()

    useEffect(() => {
        
    },[uploadedImage])
    
    return (
        <>
            <div className="title_div">
                <Typography variant='h2'>
                    Blur Your Image!
                </Typography>
            </div>
            <div className="upload_button_div">
                <UploadImageButton setImage={setUploadedImage}/>
            </div>
            {uploadedImage !== undefined ? 
                (<div className="blur_div">
                    <GrayscaleImage image={uploadedImage}/>
                </div>) : null
            }
        </>
    );
}

export default Grayscale;