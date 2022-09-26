import styled from "styled-components"
import Box from "@mui/material/Box"

export const DefaultContainer = styled(Box)`
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