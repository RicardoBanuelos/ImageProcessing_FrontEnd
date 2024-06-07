import './index.css'

import {
    Typography
} from '@mui/material'

import UploadImageButton from '../../components/UploadImageButton'
import ResizeImage from '../../components/ResizeImage'
import UploadImage from '../../api/UploadImage'

import { useState, useEffect } from 'react'

function Resize() {
    const [uploadedImage, setUploadedImage] = useState<File | null>()

    async function callUploadImage() {
        if(uploadedImage != null)
            console.log(await UploadImage(uploadedImage))
    }

    useEffect(() => {
        callUploadImage()
    },[uploadedImage])

    return (
        <>
            <div className="title_div">
                <Typography variant='h2'>
                    Resize Your Image!
                </Typography>
            </div>
            <div className="upload_button_div">
                    <UploadImageButton setImage={setUploadedImage}/>
            </div>
            {uploadedImage !== undefined ? 
                (<div className="resize_div">
                    <ResizeImage image={uploadedImage}/>
                </div>) : null
            }
        </>
    )
}

export default Resize