import styled from "styled-components";
import { Box } from "@mui/material";

export const ListBottomContainer = styled(Box)`

    display: flex;
    justify-content: center;
    align-items: center;

    .tabs-container {
        position: fixed;

        height: 7rem;

        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${props => props.theme.backgroundColor};

        border-top: 0.2px #00000042 solid;
        box-shadow: 3px 5px 10px 1px black;
    }

    .list-tab-button {
        width: 40rem;
        margin-right: 12rem;

        color: ${props => props.theme.fontColor};

        border: 1px #00000065 solid;
        border-radius: 1rem;
        box-shadow: 3px 10px 10px 1px #00000062;
    }
`