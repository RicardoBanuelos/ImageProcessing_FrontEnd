import './index.css'

import {
    Typography
} from '@mui/material'

import UploadImageButton from '../../components/UploadImageButton'

import { useState, useEffect } from 'react'

const Resize = () => {
    const [uploadedImage, setUploadedImage] = useState<File>()

    useEffect(() => {

    },[uploadedImage])

    return (
        <>
            <div className="title_div">
                <Typography variant='h2'>
                    Resize Page
                </Typography>
            </div>
            <div className="upload_button_div">
                    <UploadImageButton image={uploadedImage} setImage={setUploadedImage}/>
            </div>
            {uploadedImage !== undefined ? 
                (<p>Image is uploaded</p>) : null
            }
        </>
    )
}

export default Resize