import styled from "styled-components";
import { Box } from "@mui/material";

export const ListBottomContainer = styled(Box)`

    display: flex;
    justify-content: center;
    align-items: center;

    .tabs-container {
        height: 7rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #dbe4eb;

        border-top: 0.2px #00000042 solid;
        box-shadow: 3px 5px 10px 1px black;
    }

    .list-tab-button {
        width: 40rem;
        margin-right: 12rem;

        color: black;

        border: 1px #00000065 solid;
        border-radius: 1rem;
        box-shadow: 3px 10px 10px 1px #00000062;
    }
`