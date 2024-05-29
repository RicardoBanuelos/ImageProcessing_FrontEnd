import { TextField } from "@mui/material";
import { useState, useEffect } from 'react'

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

    useEffect(() =>{
        if(!validateNumber()) {
            setIsValid(false)
        }
        else
        {
            setIsValid(true)
        }
    },[number])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const trimmedValue = event.target.value.trimStart().replace(/^0+/, '');
        setNumber(trimmedValue === '' ? "0" : trimmedValue)
    }

    function validateNumber(): boolean {
        if(number === '') return true

        const value = parseInt(number)
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