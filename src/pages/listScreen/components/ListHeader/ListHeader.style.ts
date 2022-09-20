import styled from "styled-components"
import { Box } from "@mui/material"

export const ListHeaderContainer = styled(Box)`
    display: flex;
    flex-direction: column;

    gap: 2rem;
    padding: 2rem 0 0 2rem;

    background-color: #5672eb;

    h1 {
        color: white;
    }

    .logout-button {
        position: absolute;

        background-color: red;
        color: white;

        width: 20rem;

        top: 5rem;
        right: 5rem;

        font-size: 1.2rem;
    }

    .logout-button:hover {
        background-color: #ec4d4d;
        color: white;
    }
`