import { Box } from "@mui/material";
import styled from "styled-components";

export const RegisterFormContainer = styled.form`
    @keyframes slideToLeft {
        0% {
            opacity: 0;
            margin-left: -40rem;
        }

        100% {
            opacity: 1;
            margin-left: 0rem;
        }
    }
    animation: slideToLeft 1000ms;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme.formColor};
    border-radius: 2rem;

    width: 50rem;
    height: 62rem;

    padding: 2rem;

    margin-top: 6rem;

    b {
        font-size: 2.3rem;
        margin-bottom: 2rem;

        color: ${props => props.theme.fontColor};
    }

    .register-message {
        position: absolute;
        font-size: 1.4rem;

        top: 5.5rem;
        left: 1rem;

        width: 9rem;

        color: ${props => props.theme.fontColor};
    }

    .register-message-top {
        position: absolute;
        font-size: 2rem;

        top: 14rem;
        color: ${props => props.theme.fontColor};
    }

    .error-pass-confirmation {
        width: 16rem;
    }

    .message-success {
        top: 14rem
    }

    .register-form-buttons {
        display: flex;
        gap: 3rem;
    }
`

export const RegisterFormInputs = styled(Box)`
    display: flex;
    flex-direction: column;

    gap: 3rem;

    .register-input {
        display: flex;
        position: relative;
    }

    input {
        width: 42rem;
        font-size: 1.2rem;

        color: ${props => props.theme.fontColor};
        border: 1px solid ${props => props.theme.fontColor};
    }

    label {
        font-size: 1.7rem;

        color: ${props => props.theme.fontColor};
    }
`

export const RegisterFormCheckbox = styled(Box)`
    display: flex;
    gap: 1.2rem;

    margin-bottom: 3rem;
    margin-top: 2rem;
    margin-left: -9rem;

    align-items: center;

    span {
        font-size: 1.5rem;
        font-weight: bold;

        color: ${props => props.theme.fontColor}
    }
`

export const CpfBirthDate = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        width: 18rem;
        font-size: 1.5rem;

        color: ${props => props.theme.fontColor};
    }
`

export const RegisterFormButtons = styled(Box)`
    display: flex;
    gap: 2rem;

    button {
        width: 20rem;
        height: 4rem;

        font-size: 1.4rem;

        background-color: ${props => props.theme.buttons};

        &:hover {
            background-color: ${props => props.theme.buttonsHover};
        }
    }
`