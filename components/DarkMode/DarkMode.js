import { useState, useEffect } from "react";
import Head from "next/head";
import {
  ToggleContainer,
  Label,
  Input,
  StyledImageSun,
  StyledImageMoon,
} from "./DarkMode.styled";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <style>
          {`
            body.dark-mode {
              background-color: #333;
              color: #fff;
            }

            .sun {
              filter:  sepia(1) saturate(1) hue-rotate(180deg);
              fill:yellow;
            }

            .moon {
              filter: invert(10) sepia(0.5) saturate(0.2) hue-rotate(180deg);
            }
          `}
        </style>
      </Head>
      <ToggleContainer>
        <Input
          type="checkbox"
          id="dark-mode-toggle"
          name="dark-mode-toggle"
          min="0"
          max="1"
          value={isDarkMode ? "1" : "0"}
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <Label htmlFor="dark-mode-toggle">
          <StyledImageSun
            src="/sun.svg"
            alt="sun"
            width={25}
            height={25}
            className={isDarkMode ? "sun dark-mode" : "sun"}
          />
          <StyledImageMoon
            src="/moon.svg"
            alt="moon"
            width={25}
            height={25}
            className={isDarkMode ? "moon dark-mode" : "moon"}
          />
        </Label>
        <div className="background"></div>
      </ToggleContainer>
    </>
  );
}
