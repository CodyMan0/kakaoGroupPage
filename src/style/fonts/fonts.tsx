import { createGlobalStyle } from 'styled-components';
import Gaegu from './Gaegu-Bold.ttf';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "Gaegu";
        src: local("Gaegu-Bold"),
        url(${Gaegu}) format('truetype');
        font-style: normal;
    }
`;

export default GlobalFonts;
