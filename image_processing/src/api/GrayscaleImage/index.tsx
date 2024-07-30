import axios from 'axios'

import UploadImage from '../UploadImage'

async function GrayScaleImageAPI(image: File) {

    try {
        const unique_name = await UploadImage(image)
        const response = await axios.get("http://127.0.0.1:8000/grayscale", {
            params: {
                filename: unique_name
            }
        })
        return response
    } catch(error) {
        console.log(error)
        throw error
    }

}

export default GrayScaleImageAPI