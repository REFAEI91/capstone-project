import { createGlobalStyle } from "styled-components";
import { Goldman } from "@next/font/google";

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${goldman.style.fontFamily};
    background-color:lightyellow orchid;

  }
`;
