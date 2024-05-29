import {
    Button,
} from '@mui/material'

interface Props {
    image?: File,
    setImage: (file: File) => void
}

function UploadImageButton({image, setImage}: Props) {

    function handeImageUpload(event: any) {
        image = event.target.files[0]
        if(image === null) return

        console.log(image)
        setImage(image!)
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