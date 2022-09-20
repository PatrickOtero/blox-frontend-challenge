import { Box } from "@mui/material";
import styled from "styled-components";

export const RegisterFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme.formColor};
    border-radius: 2rem;

    width: 50rem;
    height: 45rem;

    padding: 2rem;

    b {
        font-size: 1.8rem;
        margin-top: -1.5rem;
        margin-bottom: 1rem;
    }

    .register-message {
        position: absolute;
        font-size: 2rem;

        top: 20rem;

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

    gap: 0.2rem;
`

export const RegisterFormCheckbox = styled(Box)`
    display: flex;
    gap: 1.2rem;

    margin-bottom: 4rem;

    input {
        margin-left: 1rem;
    }

    span {
        font-size: 1.2rem;
        font-weight: bold;
    }
`

export const CpfBirthDate = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`