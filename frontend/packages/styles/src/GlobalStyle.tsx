/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { theme } from "styles";

export const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: ${theme.font.family};
      }
    `}
  />
);
