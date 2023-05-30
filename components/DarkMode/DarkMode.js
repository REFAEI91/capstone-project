import { useEffect } from "react";
import {
  ToggleContainer,
  Label,
  Input,
  StyledImageSun,
  StyledImageMoon,
  Title,
} from "./DarkMode.styled";
export default function DarkMode({ isDarkMode, toggleDarkMode, textSize }) {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("isDarkMode");
    } else {
      document.body.classList.remove("isDarkMode");
    }
  }, [isDarkMode]);
  const iconSize = textSize * 1.5;
  return (
    <>
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
          <Title>{isDarkMode ? "Dark Mode" : "Light Mode"}</Title>
          {isDarkMode ? (
            <>
              <StyledImageMoon
                src="/moon.svg"
                alt="moon"
                width={iconSize}
                height={iconSize}
              />
            </>
          ) : (
            <>
              <StyledImageSun
                src="/sun.svg"
                alt="sun"
                width={iconSize}
                height={iconSize}
              />
            </>
          )}
        </Label>
      </ToggleContainer>
    </>
  );
}
