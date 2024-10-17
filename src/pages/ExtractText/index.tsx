import './index.css'

import {
    Typography
} from '@mui/material'

import UploadImageButton from '../../components/UploadImageButton'
import ExtractTextImage from '../../components/ExtractTextImage'

import { useState, useEffect } from 'react'

function ExtractText() {
    const [uploadedImage, setUploadedImage] = useState<File | null>()

    useEffect(() => {
        
    },[uploadedImage])

    return ( 
        <>
            <div className="title_div">
                <Typography variant='h2'>
                    Extract Text
                </Typography>
            </div>
            <div className="upload_button_div">
                <UploadImageButton setImage={setUploadedImage}/>
            </div>
            {uploadedImage !== undefined ? 
                (<ExtractTextImage image={uploadedImage}/>) : null
            }
        </> 
    );
}

export default ExtractText;