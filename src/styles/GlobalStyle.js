import { createGlobalStyle } from "styled-components";
import { themes, themes as theme } from "./ColorStyles";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.light.backgroundColor};
    
    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    }
  }
`;
