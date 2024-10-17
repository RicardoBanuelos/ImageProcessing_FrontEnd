import axios from 'axios'

import UploadImage from '../UploadImage'

async function BlurImageAPI(image: File, width: string, height: string) {

    try {
        const unique_name = await UploadImage(image)
        const response = await axios.get("http://127.0.0.1:8000/blur", {
            params: {
                kernel_width: width,
                kernel_height: height,
                filename: unique_name
            }
        })
        return response
    } catch(error) {
        console.log(error)
        throw error
    }

}

export default BlurImageAPI