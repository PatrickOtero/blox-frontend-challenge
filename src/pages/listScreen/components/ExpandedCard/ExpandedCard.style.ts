import { Box } from "@mui/system";
import styled from "styled-components";

export const ExpandedCardContainer = styled(Box)`
    width: 80rem;
    height: 52rem;

    box-shadow: -10px 5px 50px 1px black;

    border-radius: 1rem;
`

export const CardTop = styled(Box)`
    display: flex;

    width: 100%;
    height: 10rem;

    background-color: #5260dd;

    padding-left: 3rem;

    .subject-icon {
        position: relative;

        width: 10rem;
        height: 10rem;

        top: 3rem;

        background-color: #3748dd;
    }

    .subject-title {
        color: white;

        margin-top: 4rem;
        margin-left: 2rem;
    }

    .close-icon-button {

        width: 4rem;
        height: 4rem;

        margin-left: 44rem;
        margin-top: 1rem;

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
            font-size: 1.5rem;
        }

        .knowledge-icon-container {
            display: flex;
            align-items: center;

            gap: 1rem;

            .knowledge-icon {
                background-color: #3748dd;
            }
        }

        .profile-icon-container {
                display: flex;
                align-items: center;

                gap: 1rem;
            }
    }
`