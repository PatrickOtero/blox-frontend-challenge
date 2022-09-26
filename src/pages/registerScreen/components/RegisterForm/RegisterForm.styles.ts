import { Box } from "@mui/material";
import styled from "styled-components";

export const RegisterFormContainer = styled.form`
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
    }

    .register-message {
        position: absolute;
        font-size: 1.4rem;

        top: 5.5rem;
        left: 1rem;

        width: 9rem;

        color: #f50a0ace;
    }

    .register-message-top {
        position: absolute;
        font-size: 2rem;

        top: 14rem;
        color: #f50a0ace;
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
        position: relative;
    }

    input {
        width: 20rem;
        font-size: 1.5rem;

        /* height: 1rem; */
    }

    label {
        font-size: 1.7rem;
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
    }
`

export const CpfBirthDate = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RegisterFormButtons = styled(Box)`
    display: flex;
    gap: 2rem;

    button {
        width: 20rem;
        height: 4rem;

        font-size: 1.4rem;
    }
`