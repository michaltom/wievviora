import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        background-color: hsla(0, 0%, 5%, 100%);
    }
    *,
    *::before,
    *::after{
        box-sizing: inherit
    }

    body{
        margin: 0;
        padding: 0px 0;
        font-family: "Montserrat" ,monospace
    }

    button{
        padding: 0;
        cursor: pointer;
        font-family:  "Montserrat",monospace
    }

    ul{
        padding: 0;
        margin: 0
    }

   
`

export default GlobalStyle
