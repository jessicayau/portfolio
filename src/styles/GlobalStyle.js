import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import LatoRegularWoff from "../fonts/lato-regular.woff";
import LatoRegularWoff2 from "../fonts/lato-regular.woff2";
import LatoBoldWoff from "../fonts/lato-bold.woff";
import LatoBoldWoff2 from "../fonts/lato-bold.woff2";
import LatoBlackWoff from "../fonts/lato-black.woff";
import LatoBlackWoff2 from "../fonts/lato-black.woff2";

const GlobalStyle = createGlobalStyle`
  ${variables}
  
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegularWoff2}) format('woff2'), url(${LatoRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBoldWoff2}) format('woff2'), url(${LatoBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBlackWoff2}) format('woff2'), url(${LatoBlackWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  

  html {
      width: 100%;
      box-sizing: border-box;
      scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--font-color-primary);
    font-family: var(--font-primary);
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 .8rem 0;
    font-weight: 600;
  }

  .medium-heading {
    margin-bottom: 1rem;
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 400;

    @media (max-width: 425px) {
      font-size: var(--hero-subtitle-mobile);
    }
  }

  .large-heading {
    margin-bottom: 1rem;
    font-size: clamp(2.5rem, 10vw, 6rem);
    font-family: var(--font-secondary);
    color: var(--font-color-tertiary);
  }
  
  .section-heading {
    display: flex;
    font-family: var(--font-secondary);
    font-size: var(--section-heading);
    letter-spacing: 1px;
    margin-bottom: 3rem;
    white-space: nowrap;
    color: var(--font-color-secondary);

    &::after {
      content: '';
      width: 100%;
      max-width: 250px;
      height: 1px;
      margin-left: 1rem;
      align-self: center;
      background-color: var(--font-color-primary);

    }

    @media (max-width: 600px) {
      font-size: var(--section-heading-mobile);
    }

    @media (max-width: 424px) {
      justify-content: center;

      &::after {
        display: none;
      }
    }
  }
  
  section {
    padding: 5% 10%;

    @media (max-width: 600px) {
      padding: 10%;
    }
  }

  p {
    font-size: var(--font-md);
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: var(--font-color-primary);
    transition: all 250ms ease;

    &:focus-visible {
      color: var(--font-color-secondary);
      outline: 2px dashed black;
    }

    &:hover {
      color: var(--font-color-secondary);
      transition: all 250ms ease;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    line-height: 1.5rem;
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    clip: rect(0 0 0);
    overflow: hidden;
  }

  @keyframes animate {
    0% {
      transform: scale(0, 0.005);
    }
    50% {
      transform: scaleY(0.005);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    to {
      opacity: 1;
      transform: translateY(-50%);
    }
  }

  @keyframes fadeInAndUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes bounce {
      0% {
        transform: scale(1, 1) translateY(0);
      }
      10% {
        transform: scale(1.1, 0.9) translateY(0);
      }
      30% {
        transform: scale(0.9, 1.1) translateY(-30px);
      }
      50% {
        transform: scale(1.05, 0.95) translateY(0);
      }
      57% {
        transform: scale(1, 1) translateY(-7px);
      }
      64% {
        transform: scale(1, 1) translateY(0);
      }
      100% {
        transform: scale(1, 1) translateY(0);
      }
    }

    @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyle;
