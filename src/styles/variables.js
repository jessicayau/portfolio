import { css } from "styled-components";

const variables = css`
  :root {
    --font-sm: 1rem;
    --font-md: 1.125rem;
    --font-lg: 1.25rem;
    --font-xl: 1.375rem;

    --hero-subtitle-mobile: 1.5rem;
    --section-heading: 2rem;
    --section-heading-mobile: 1.75rem;
    --project-title: 1.75rem;
    --project-title-mobile: 1.5rem;

    --font-primary: "Lato", "Roboto", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    --font-secondary: Times, Georgia, "Times New Roman", serif;

    --font-color-primary: #000000;
    --font-color-secondary: #a66a8a;
    --font-color-tertiary: #383c87;

    --bg-color: #ebdadf;
    --intro-bg-color: #000000;
    --header-bg-color: #e8d8dd;
    --button-bg-color: #a66a8a;
    --button-hover-bg-color: #383c87;
    --button-hover-color: #ebdadf;
    --button-bg-color-secondary: #ebdadf;
    --icon-hover-color: #a66a8a;
    --border-color: #e1bcca;

    --border-radius: 5px;
  }
`;

export default variables;
