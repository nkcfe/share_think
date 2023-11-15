import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    /* css reset 및 글로벌 css 적용  */

    *{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        transition : all 0.4s ease
    }

`;

export default GlobalStyle;
