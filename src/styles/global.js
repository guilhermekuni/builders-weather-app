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
    --borderRadius: 32px;
    --hugeSize: 120px;
    --bigSize: 40px;
    --subtitleSize: 24px;
    --textSize: 20px;

    --background: #edf2f4;
    --darkBackground: #292E3D;
    --white: #fff;

    --textColor: #1a1d26;
    --lightTextColor: #edf2f4;
    --descriptionColor: #8d99ae;
    --cardLinearColor1: #86B4FE;
    --cardLinearColor2: #C2D9FE;
    --cardLinearColor3: #D6E4FF;
  }
`;
