import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        display: flex;
        min-height: 100vh;
        background-color: ${({theme}) => theme.colors.almostWhite };
        font-family: 'Epilogue', sans-serif;
        padding: 0;
        margin: 0; 
        position: relative;   
    }

    
    #root {
        width: 100%;
        // margin-inline: auto;
    }
    

    p {
        font-size: 1.8rem;
        color: ${({theme}) => theme.colors.mediumGray} !important;
    }
 
    button {
        all: unset;
        cursor: pointer;
        transition: all .3s;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }

`
    


