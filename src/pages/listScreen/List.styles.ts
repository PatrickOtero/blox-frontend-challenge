import { Box } from "@mui/material";
import styled from "styled-components";

export const ListContainer = styled(Box)`
    min-width: 100vw;
    min-height: 100vh;
`

export const ListMain = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex-wrap: wrap;
`

export const ListMainTitle = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;

    .title-main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        .search-icon {
        position: absolute;

        width: 2rem;
        
        margin-left: 15rem;
        margin-top: 3rem;
        }
    }

    b {
        font-size: 2.4rem;
    }

    div {
        display: flex;
        gap: 1rem;
    }

    .list-line {
        height: 1px;
        background-color: #0000003a;

        width: 100%;
    }
`

export const ListMainIcons = styled(Box)`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    padding: 0 2rem;
`

export const ListMainCards = styled(Box)`
    width: 100%;

    padding: 2rem;

    display: flex;
    flex-wrap: wrap;
`

export const ListAboveBottomContainer = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 33rem;

    .megaphone-icon {
        background-color: #65cc98;
    }

    .interrogation-icon {
        background-color: #65a3cc;
    }

`
export const ListAboveBottomButtonsContainer = styled(Box)`

    display: flex;
    justify-content: space-around;

    width: 100%;

    .pagination-button {
        width: 50rem;
        height: 3rem;

        color: #FFFFFF;

        background-color: #4187b6;
    }

    .pagination-button:hover {
        color: #FFFFFF;
        
        background-color: #446e8a;
    }
`

export const ListBottom = styled(Box)`
    /* margin-top: 2.8rem ; */
`