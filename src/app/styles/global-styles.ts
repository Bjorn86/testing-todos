import { createGlobalStyle } from 'styled-components';
import UbuntuBoldWoff from 'shared/assets/fonts/Ubuntu-Bold.woff';
import UbuntuBoldWoff2 from 'shared/assets/fonts/Ubuntu-Bold.woff2';
import UbuntuLightWoff from 'shared/assets/fonts/Ubuntu-Light.woff';
import UbuntuLightWoff2 from 'shared/assets/fonts/Ubuntu-Light.woff2';
import UbuntuMediumWoff from 'shared/assets/fonts/Ubuntu-Medium.woff';
import UbuntuMediumWoff2 from 'shared/assets/fonts/Ubuntu-Medium.woff2';
import UbuntuRegularWoff from 'shared/assets/fonts/Ubuntu-Regular.woff';
import UbuntuRegularWoff2 from 'shared/assets/fonts/Ubuntu-Regular.woff2';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src:
      url(${UbuntuLightWoff2}) format('woff2'),
      url(${UbuntuLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src:
      url(${UbuntuRegularWoff2}) format('woff2'),
      url(${UbuntuRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src:
      url(${UbuntuMediumWoff2}) format('woff2'),
      url(${UbuntuMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src:
      url(${UbuntuBoldWoff2}) format('woff2'),
      url(${UbuntuBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    // COLORS
    --color-very-light-green: #a4c3b2;
    --color-grey-green: #eaf4f4;
    --color-light-green: #cce3de;
    --color-green: #a4c3b2;
    --color-dark-green: #6b9080;
    --color-dark-grey: #c1c1c1;
    --color-grey: #d0d1d1;
    --color-light-grey: #e0e0e0;
    --color-very-light-grey: #f2f2f2;
    --color-white: #ffffff;
    --color-black: #000000;
    --shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.2);

    // FONT SIZES
    --fs-xxs: 10px;
    --fs-xs: 12px;
    --fs-s: 16px;
    --fs-m: 20px;
    --fs-l: 24px;
    --fs-xl: 32px;
    --fs-xxl: 48px;

    // LINE HEIGHTS
    --lh-xs: 12px;
    --lh-s: 18px;
    --lh-m: 24px;
    --lh-l: 36px;
    --lh-xl: 48px;
    --lh-xxl: 60px;

    // FONT WEIGHTS
    --fw-300: 300;
    --fw-400: 400;
    --fw-500: 500;
    --fw-700: 700;

    // FONT FAMILY
    --family: 'Ubuntu', Helvetica, Arial, sans-serif;

    // BORDER RADIUS
    --br-s: 4px;
    --br-m: 8px;
    --br-l: 12px;
    --br-xl: 16px;
    --br-xxl: 24px;

    // SIZES
    --base-width: 768px;
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  nav,
  footer,
  header,
  aside {
    display: block;
  }

  html,
  body {
    line-height: 1;
    font-size: 14px;
    text-size-adjust: 100%;
  }

  input,
  button,
  textarea {
    font-family: inherit;
  }

  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
  }

  button,
  input[type='submit'] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a:focus,
  a:active {
    outline: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 400;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
