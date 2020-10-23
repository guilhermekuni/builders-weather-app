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
    padding: 0 20px;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    // font sizes
    --hugeSize: 80px;
    --bigSize: 48px;
    --subtitleSize: 32px;
    --textSize: 24px;

    // colors
    --background: #edf2f4;
    --white: #fff;
    --titleColor: #2b2d42;
  }
`;
