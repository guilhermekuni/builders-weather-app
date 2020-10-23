import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #edf2f4;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    --borderRadius: 24px;
    --hugeSize: 120px;
    --bigSize: 40px;
    --textSize: 24px;
    --smallSize: 20px;

    --background: #edf2f4;
    --darkBackground: #292E3D;
    --white: #fff;

    --textColor: #1a1d26;
    --lightTextColor: #edf2f4;
    --hightLightText: #011F51;
    --descriptionColor: #8d99ae;
    --cardLinearColor1: #023FA1;
    --cardLinearColor2: #2275FC;
    --cardLinearColor3: #4A8EFC;
  }
`;
