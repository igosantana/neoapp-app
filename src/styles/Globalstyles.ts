import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #e62429;
  --primary-hover: #D32F2F;
  --secondary-color: #151515;
  --gray-100: #e1e1e1;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--white);
  font-family: 'Marvel', sans-serif;
}
`;
