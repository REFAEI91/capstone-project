import { createGlobalStyle } from "styled-components";
import { Kanit } from "@next/font/google";

const kanit = Kanit({
  weight: "300",
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
    background-color:lightyellow orchid;
    font-family: ${kanit.style.fontFamily};
  ;
  }
`;
