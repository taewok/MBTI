import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SDSamliphopangche_Outline';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    *{
        margin:0;
        padding:0;
    }
    body{
        display: flex;
        justify-content: center;
        height:100vh;
        background-color: #F19100 ;
        font-family: "SDSamliphopangche_Outline";
        overflow: hidden;
    }
`;

export default GlobalStyle;
