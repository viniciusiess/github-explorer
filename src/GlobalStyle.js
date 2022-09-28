import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --black-color: #00050B;
        --white-color: #fff;
        --blue-color: #3972A9;
        --blue-color2: #3972A940;
        --background: linear-gradient(90deg, rgba(3,60,78,1) 0%, rgba(6,69,98,1) 25%, rgba(6,86,143,1) 50%, rgba(13,150,200,1) 75%, rgba(0,212,255,1) 100%);
        --border-radius: 10px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        scroll-behavior: smooth;
        font-family: 'Inter', sans-serif;
        border: none;
    }

    a:hover, button:hover {
        filter: brightness(.9);
    }

    a, button {
        cursor: pointer;
    }

    *:focus {
        outline: none;
    }

    a {
        color: inherit;
    }

    *::-webkit-scrollbar {
        width: 10px;
    }

    *::-webkit-scrollbar-track {
        background: var(--blue2-color);
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb {
        background: var(--blue-color);
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb:hover {
        background: #3972B9;
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb:active {
        filter: brightness(.9);
        border-radius: 10px;
    }

    h1, h2, h3, p, span {
        color: var(--white-color);
    } 
`
export default GlobalStyle