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
  html {
  --backgroundColor: #F8F6F4;
  --darkBackgroundColor: #526D82;
  --darkTextColor: #FCF8E8
  --textColor : #594545
 
  }

  body {
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
  margin: 0;
  color: var(--textColor);
  background-color: var(--backgroundColor);
  font-family: ${kanit.style.fontFamily};
  padding-bottom: 3rem;
  &.isDarkMode {
  background-color: var(--darkBackgroundColor);
  color: #FCF8E8
  }
  }
`;
