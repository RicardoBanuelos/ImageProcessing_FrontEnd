import axios from 'axios'

import UploadImage from '../UploadImage'

async function ResizeImageAPI(image: File, width: string, height: string) {

    try {
        const unique_name = await UploadImage(image)
        const response = await axios.get("http://127.0.0.1:8000/resize_image", {
            params: {
                width: width,
                height: height,
                filename: unique_name
            }
        })
        return response
    } catch(error) {
        console.log(error)
        throw error
    }

}

export default ResizeImageAPI