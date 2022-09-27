import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    background-color: ${props => props.theme.backgroundColor};

    
    font-family: 'Open Sans', sans-serif;
}

.theme-changer {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;

    left: 8rem;
    bottom: 2rem;

    width: 7rem;
    height: 7rem;

    border-radius: 50%;
    background-color: ${props => props.theme.buttons};
}

`