import styled from "styled-components"
import { Box } from "@mui/material"

export const ListHeaderContainer = styled(Box)`
    display: flex;
    flex-direction: column;

    gap: 2rem;
    padding: 2rem 0 0 2rem;

    background-color: ${props => props.theme.header};

    .headerButtons {
        background-color: ${props => props.theme.header};

        .button-tab {
           color: ${props => props.theme.exceptionalFontColor};
        }
    }

    h1 {
        color: ${props => props.theme.exceptionalFontColor};
    }

    .logout-button {
        position: absolute;

        background-color: ${props => props.theme.logOutButton};
        color: ${props => props.theme.exceptionalFontColor};

        width: 20rem;

        top: 5rem;
        right: 7rem;

        font-size: 1.2rem;
    }

    .logout-button:hover {
        background-color: ${props => props.theme.logOutButtonHover};
    }
`