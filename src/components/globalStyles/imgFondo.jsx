import { createGlobalStyle } from "styled-components";

export const Fondo = createGlobalStyle`
  body {
    background-image: url(${({quotes, selected}) => quotes[selected-1].img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
  `;