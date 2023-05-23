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
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
  margin: 0;
  background-color: lightyellow orchid;
  font-family: ${kanit.style.fontFamily};
  padding-bottom: 3rem;
  &.isDarkMode {
  color: #fff;
  background-color: #43474c;
  }
  }
`;
