import styled from "styled-components";
import {Box} from "@mui/material"

export const CardContainer = styled(Box)`
    width: 50rem;
    cursor: pointer;

    transition: 200ms;

    &:hover {
        transform: scale(1.1);
    }
`

export const UpperContainer = styled(Box)`
    width: 110%;
    height: 5rem;

    margin-top: -1.6rem;
    margin-left: -1.6rem;
    padding: 0 0.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        color: white;
    }

    .settings-button {
        margin-left: 45rem;
        position: absolute;
    }

    .task-alt-button {
        margin-left: 42rem;
        position: absolute;
    }
`

export const MiddleContainer = styled(Box)`
    width: 110%;
    height: 8rem;

    margin-left: -1.6rem;
    margin-bottom: -1.6rem;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MiddleContainerMain = styled(Box)`
    display: flex;
    align-items: center;
    gap: 2rem;

    .middle-container-main-span {
        font-size: 1.2rem;
        color: white;
    }
`

export const MiddleContainerBottom = styled(Box)`
    display: flex;
    align-items: center;
    gap: 2rem;

    .middle-container-bottom-span {
        font-size: 1rem;
        color: white;
    }
`

export const BottomContainer = styled(Box)`
    width: 110%;
    height: 5rem;

    margin-left: -1.6rem;
    padding: 0 1.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
`