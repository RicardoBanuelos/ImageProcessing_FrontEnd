import {
    Button,
} from '@mui/material'

interface Props {
    setImage: (file: File) => void
}

function UploadImageButton({setImage}: Props) {
    const MAX_FILE_SIZE_MB = 5; // Maximum file size in MB

    function handeImageUpload(event: any) {
        const newImage = event.target.files[0]
        if(newImage === null || newImage.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            alert('File size exceeds the maximum limit (5MB)');
            return
        }

        setImage(newImage!)
    }

    return (
        <>
            <input 
                id="upload_button"
                accept=".png,.jpg,.jpeg"
                type="file" 
                style={{ display: 'none' }} 
                onChange={handeImageUpload}
            />
            <label htmlFor='upload_button'>
                <Button variant='contained' component='span' >
                    Upload Image
                </Button>
            </label>
        </>
    )
}

export default UploadImageButton