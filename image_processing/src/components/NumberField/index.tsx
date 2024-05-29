import { TextField } from "@mui/material";
import { useState } from 'react'

interface Props {
    label: string
    placeholder?: string
    number: string
    setNumber: (number: string) => void
    min: number
    max: number
}

function NumberField({label, placeholder, number, setNumber, min, max} : Props) {
    const [isValid, setIsValid] = useState<boolean>(true)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value)

        if(!validateNumber()) {
            console.log("Invalid Number")
            setIsValid(false)
            return
        }

        setIsValid(true)
    }

    function validateNumber(): boolean {
        if(number === '') return true

        const value = parseInt(number)
        console.log(value)
        return value >= min && value <= max
    }

    return ( 
        <TextField
            type='number'
            label={label}
            variant='filled'
            value={number}
            onKeyDown={(evt) => ["e", "E", "+", "-",'.'].includes(evt.key) && evt.preventDefault()}
            onChange={handleChange}
            placeholder={placeholder}
            error={!isValid}
            helperText={!isValid ? `Please enter value between ${min} and ${max}` : ""}
            sx={{background: "white", color: "black", margin: "1vh"}}
        />
     );
}

export default NumberField;