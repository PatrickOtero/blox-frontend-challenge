import { Box } from "@mui/material";
import styled from "styled-components";

export const LoginFormContainer = styled(Box)`
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

        color: #2d359c;
        top: 20rem;
    }

    b {
        font-size: 2.3rem;
        margin-bottom: 1rem;

        color: ${props => props.theme.lightBlack1};
    }
`

export const LoginFormLines = styled(Box)`
    display: flex;
    gap: 3rem;

    margin-top: 4rem;

    div {
        background-color: #0e0d0d3a;
        width: 10rem;
        height: 1px;
    }

    b {
        font-size: 2rem;
        margin-top: -1.5rem;
        margin-bottom: 1rem;

        color: ${props => props.theme.lightBlack1};
    }
    
`

export const LoginFormInputs = styled(Box)`
    display: flex;
    flex-direction: column;

    gap: 0.2rem;

    input {
        font-size: 1.7rem;
        width: 43rem;
    }

    label {
        font-size: 1.7rem;
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
    }
`