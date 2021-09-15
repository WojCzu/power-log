import { createGlobalStyle } from 'styled-components';

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
        background-color: ${({ theme }) => theme.color.lightGray};
    }
    button, a {
        font-family: 'Montserrat', sans-serif;
    }
`;