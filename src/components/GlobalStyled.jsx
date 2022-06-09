import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        }


    body{
        font-family: 'Space Mono', monospace;
        font-weight: 700;
        background-color: hsl(185, 41%, 84%) ;
        
    }
`;
