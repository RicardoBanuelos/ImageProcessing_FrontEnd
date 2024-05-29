import {
    Button,
} from '@mui/material'

interface Props {
    setImage: (file: File) => void
}

function UploadImageButton({setImage}: Props) {

    function handeImageUpload(event: any) {
        const newImage = event.target.files[0]
        if(newImage === null) return

        console.log(newImage)
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