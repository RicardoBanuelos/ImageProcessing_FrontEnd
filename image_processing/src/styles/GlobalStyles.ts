// globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 .MuiInputBase-input[type='number']::-webkit-inner-spin-button,
 .MuiInputBase-input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyle;