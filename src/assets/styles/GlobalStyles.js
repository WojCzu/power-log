import { createGlobalStyle } from 'styled-components';
import { scrollbar } from './scrollbar';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *::after, *::before{
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
    button, a, input, textarea {
        font-family: 'Montserrat', sans-serif;
    }
    input, button{
        box-sizing: border-box;
    }
    
    ${scrollbar}
`;
