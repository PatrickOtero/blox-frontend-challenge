import Box from "@mui/material/Box";
import styled from "styled-components";

export const ListContainer = styled(Box)`
    min-width: 100vw;
    min-height: 100vh;
`

export const ListMain = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ListMainTitle = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;

    .title-main {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        b {
        font-size: 2.4rem;
        }
    }   

    .list-line {
        height: 1px;
        background-color: #0000003a;

        width: 100%;

        margin-top: 1rem;
    }
`

export const TitleInputs = styled(Box)`
    display: flex;
    align-items: center;

    gap: 3rem;

    margin-right: 10rem;

    .search-input {
        input {
            width: 30rem;
            font-size: 1.6rem;
        }

        label {
            font-size: 1.6rem;
        }            
    }

    .filter-input {
        width: 50rem;

        input {
            font-size: 1.6rem;
        }

        label {
            font-size: 1.6rem;
        }
    }

    .search-icon {
        position: absolute;

        right: 50rem;
        width: 2rem;
        margin-top: 3rem;
    }
`

export const ListMainIcons = styled(Box)`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    padding: 0 2rem;
`

export const ListMainCards = styled(Box)`
    padding: 2rem;

    display: flex;
    flex-wrap: wrap;

    gap: 3rem;
`

export const ListAboveBottomContainer = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 16.5rem;

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