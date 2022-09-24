import { Box } from "@mui/material";
import styled from "styled-components";

export const RegisterFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme.formColor};
    border-radius: 2rem;

    width: 50rem;
    height: 55rem;

    padding: 2rem;

    b {
        font-size: 2.3rem;
        margin-bottom: 2rem;
    }

    .register-message {
        position: absolute;
        font-size: 2rem;

        top: 17rem;

        color: #f50a0ace;
    }

    .register-form-buttons {
        display: flex;
        gap: 3rem;
    }
`

export const RegisterFormInputs = styled(Box)`
    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    input {
        width: 20rem;
        font-size: 1.5rem;
    }

    label {
        font-size: 1.7rem;
    }
`

export const RegisterFormCheckbox = styled(Box)`
    display: flex;
    gap: 1.2rem;

    margin-bottom: 3rem;
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