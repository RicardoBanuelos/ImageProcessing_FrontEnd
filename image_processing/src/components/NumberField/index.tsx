import { TextField } from "@mui/material";

interface Props {
    label: string
    placeholder?: string
    number: string
    setNumber: (number: string) => void
}

function NumberField({label, placeholder, number, setNumber} : Props) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value)
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
            InputProps={{
                inputProps: {
                    step: "any"
                }
            }}
            sx={{background: "white", color: "black", margin: "1vh"}}
        />
     );
}

export default NumberField;