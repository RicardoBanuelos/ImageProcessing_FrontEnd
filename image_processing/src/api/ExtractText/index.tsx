import axios from 'axios'

import UploadImage from '../UploadImage'

async function ExtractTextAPI(image: File) {
    try {
        const unique_name = await UploadImage(image)
        const response = await axios.get("http://127.0.0.1:8000/extract_text", {
            params: {
                filename: unique_name
            }
        })
        return response.data
    } catch(error) {
        console.log(error)
        throw error
    }

}

export default ExtractTextAPI