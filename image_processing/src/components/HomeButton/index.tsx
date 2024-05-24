import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';

interface HomeButtonProps {
    text: string,
    onClick?: () => void
}

const StyledButton = styled(Button)({
    backgroundColor: "#01579b",
    color: "white",
    height: "4rem",
    width: "10rem",

    '&:hover': {
        backgroundColor: '#03a9f4',
      },
})

const HomeButton = (props: HomeButtonProps) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.text}
        </StyledButton>
    )
}

export default HomeButton