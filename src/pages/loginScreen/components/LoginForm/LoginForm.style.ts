import { Box } from "@mui/material";
import styled from "styled-components";

export const LoginFormContainer = styled(Box)`
    @keyframes slideToRight {
        0% {
            opacity: 0;
            margin-right: -40rem;
        }

        100% {
            opacity: 1;
            margin-right: 0rem;
        }
    }
    animation: slideToRight 1000ms;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme.formColor};
    border-radius: 2rem;

    width: 50rem;
    height: 38rem;

    padding: 2rem;

    .login-message {
        position: absolute;

        color: ${props => props.theme.fontColor};
        top: 20rem;
    }

    b {
        font-size: 2.3rem;
        margin-bottom: 1rem;

        color: ${props => props.theme.fontColor};
    }
`

export const LoginFormLines = styled(Box)`
    display: flex;
    gap: 3rem;

    margin-top: 4rem;

    div {
        background-color: ${props => props.theme.fontColor};
        width: 10rem;
        height: 1px;
    }

    b {
        font-size: 2rem;
        margin-top: -1.5rem;
        margin-bottom: 1rem;

        color: ${props => props.theme.fontColor};
    }
    
`

export const LoginFormInputs = styled(Box)`
    display: flex;
    flex-direction: column;

    gap: 0.2rem;

    input {
        font-size: 1.7rem;
        width: 43rem;

        color: ${props => props.theme.fontColor};
    }

    label {
        font-size: 1.7rem;

        color: ${props => props.theme.fontColor};
    }
`

export const FormLoginButtons = styled(Box)`
    display: flex;
    gap: 3rem;

    margin-top: 4rem;

    button {
        width: 20rem;
        height: 5rem;
        font-size: 1.4rem;

        background-color: ${props => props.theme.buttons};

        &:hover {
        background-color: ${props => props.theme.buttonsHover};
    }
}
`