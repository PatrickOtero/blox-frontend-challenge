import Box from "@mui/material/Box";
import styled from "styled-components";

export const ListContainer = styled(Box)`
    min-width: 100vw;
    min-height: 100vh;

    .backdrop {
        position: fixed;
        display: flex;

        justify-content: center;
        align-items: center;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;

        background-color: #0000004b;

        .login-loading {
            width: 100px;
            height: 100px;

            display: flex;
            justify-content: center;
            align-items: center;

            transform: scale(2);
        }

        @keyframes rotation {
            to {
                 transform: rotate(1turn);
            }
        }

        .login-loader {
            width: 50px;
            height: 50px;

            border: 6px solid blue;
            border-top: 6px solid #3ba5ec;
            border-radius: 50%;

            animation: rotation 1s infinite;
        }
    }
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