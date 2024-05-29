import { TextField } from "@mui/material";

interface Props {
    label: string
    placeholder?: string
    number: string
    setNumber: (number: string) => void
}

function NumberField({label, placeholder, number, setNumber} : Props) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const re = /^[0-9\b]+$/;
        if(event.target.value === '' || re.test(event.target.value)) {
            console.log(event.target.value)
            setNumber(event.target.value)
        }
    }

    function makeFullyNumeric(event: React.KeyboardEvent<HTMLDivElement>) {

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
            sx={{background: "white", color: "black", margin: "1vh"}}
        />
     );
}

export default NumberField;