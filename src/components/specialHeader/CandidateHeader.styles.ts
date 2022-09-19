import styled from "styled-components";
import { Box } from "@mui/material";

export const CandidateHeaderContainer = styled(Box)`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: space-around;

    min-width: 100vw;
    height: 12rem;

    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    background-color: ${props => props.theme.lightBlue1};

    h1 {
        font-size: 3rem;
        color: ${props => props.theme.lightBlue2};
    }

    h2 {
        font-size: 2.5rem;
        color: ${props => props.theme.lightBlue2};
    }

    h3 {
        font-size: 2.5rem;
        color: ${props => props.theme.lightBlue3};

        font-weight: 700;
    }
`;