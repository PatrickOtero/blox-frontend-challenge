import { Box } from "@mui/system";
import styled from "styled-components";

export const ExpandedCardContainer = styled(Box)`
    @keyframes showCardDetails {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    animation: showCardDetails 300ms;

    width: 80rem;
    height: 52rem;

    box-shadow: -10px 5px 50px 1px black;

    border-radius: 1rem;
`

export const CardTop = styled(Box)`
    display: flex;

    width: 100%;
    height: 10rem;

    padding-left: 3rem;

    .title-and-close-button {
        display: flex;

        width: 100%;

        align-items: center;
        justify-content: space-between;
    }

    .subject-icon {
        position: relative;

        width: 10rem;
        height: 10rem;

        top: 3rem;
    }

    .subject-title {
        color: white;

        margin-left: 2rem;

        font-size: 2.8rem;
    }

    .close-icon-button {
        width: 4rem;
        height: 4rem;

        margin-bottom: 1.6rem;
        margin-right: 2rem;

        .close-icon {
            width: 3rem;
            height: 3rem;

            color: #ffffff;
        }
    }

`

export const CardMiddle = styled(Box)`
    width: 100%;
    height: 40rem;

    background-color: #FFFFFF;
`

export const CardMiddleTop = styled(Box)`
    display: flex;

    width: 100%;
    height: 10rem;
    padding: 2rem;

    justify-content: center;
    align-items: center;

    gap: 3rem;

    margin-top: 2rem;

    .CardMiddleTop-info {
        display: flex;
        flex-direction: column;

        .info-span {
            font-size: 1.8rem;

            color: #00000050;
            font-weight: 700;
        }

        .secondary {
            font-size: 2.8rem;
        }
    }

    .CardMiddleTop-info-divisor {
        width: 0.1rem;
        height: 100%;

        background-color: #00000065;
    }
`

export const CardMiddleBottom = styled(Box)`
    display: grid;
    grid-template-areas:
     "knowledge-area profile"
     "functional-area competencies";
    width: 100%;

    margin-left: 8rem;
    margin-top: 5rem;

    gap: 4rem;

    .area-container {
        display: flex;
        flex-direction: column;

        gap: 1rem;

        h1 {
            font-size: 2.2rem;
            color: #000000c2;
        }

        span, p {
            font-size: 1.8rem;
        }

        .knowledge-icon-container {
            display: flex;
            align-items: center;

            gap: 1rem;
        }

        .profile-icon-container {
                display: flex;
                align-items: center;

                gap: 1rem;
            }
    }
        .competencies-container {
            display: flex;
            flex-direction: row;

            gap: 1rem;

            overflow-x: auto;
            width: 30rem;

            p {
                display: flex;
                justify-content: center;
                align-items: center;

                padding: 0.3rem 0.8rem;

                font-size: 1.5rem;
                color: #ffffff;

                border-radius: 2rem;
            }

            .empty-competencies {
                color: #000000;

                font-size: 1.8rem;
            }

            &::-webkit-scrollbar {
                height: 0.8rem;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 1rem;
                background-color: #c6c6ecc2;
            }

            &::-webkit-scrollbar-thumb:hover {
                border-radius: 1.5rem;
                background-color: #b3b3e4c2;
            }

        }
`