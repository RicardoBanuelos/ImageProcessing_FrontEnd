import axios from 'axios'

async function UploadImage(image: File) {

    let formData = new FormData()
    formData.append("file", image)
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/upload_image",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        
        return response.data.unique_name

    } catch(error) {
        console.log(error)
        throw error
    }
}

export default UploadImage