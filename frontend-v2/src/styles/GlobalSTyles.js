import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  /* Alteryx Blue */
  --color-brand-50: #84bede;
  --color-brand-100: #6bb0d7;
  --color-brand-200: #3a96ca;
  
  --color-brand-500: #097cbd;

  --color-brand-600: #076397;
  --color-brand-700: #076397;
  --color-brand-800: #053e5f;
  --color-brand-900: #021926;

  --color-brand-orange-light:#ca7c13;
  --color-brand-orange: #fc9b18;
  --color-brand-orange-dark:#fdb95d;

  --color-bg-dark:#05273F;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}`;

export default GlobalStyles;
