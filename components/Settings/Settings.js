import { useEffect, useState } from "react";
import Login from "../Login/Login";
import DarkMode from "../DarkMode/DarkMode";
import styled from "styled-components";
import TextSize from "../TextSize/TextSize";
import useLocalStorageState from "use-local-storage-state";

const SettingsButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0.8rem;
  cursor: pointer;
  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    filter: invert(1);
  `}
`;
const SettingsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 12rem;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
  transform: translateX(100%);
  ${({ isOpen }) =>
    isOpen &&
    `
      transform: translateX(0);
    `}
  ${({ isDarkMode }) =>
    isDarkMode &&
    `
background-color: #505050;
    `}
`;

const StyledImage = styled.img`
  width: 35px;
  height: 35px;
  filter: ${(props) => (props.isDarkMode ? "invert(1)" : "none")};
`;
export default function Settings({
  isDarkMode,
  toggleDarkMode,
  medicationPlan,
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [textSize, setTextSize] = useLocalStorageState("textSize", {
    defaultValue: 16,
  });
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleTextSizeChange = (event) => {
    setTextSize(parseInt(event.target.value));
  };
  useEffect(() => {
    document.documentElement.style.fontSize = `${textSize}px`;
  }, [textSize]);

  return (
    <>
      <SettingsButton onClick={toggleMenu} isDarkMode={isDarkMode}>
        <StyledImage
          src="/settings.svg"
          width={30}
          height={30}
          alt="settings"
        />
        Settings
      </SettingsButton>
      <SettingsMenu isOpen={isMenuOpen} isDarkMode={isDarkMode}>
        <SettingsButton onClick={toggleMenu} isDarkMode={isDarkMode}>
          <StyledImage src="/close.svg" width={35} height={35} alt="close" />
          Close
        </SettingsButton>
        <Login isDarkMode={isDarkMode} medicationPlan={medicationPlan} />
        <TextSize
          isDarkMode={isDarkMode}
          textSize={textSize}
          handleTextSizeChange={handleTextSizeChange}
        />
        <DarkMode
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          textSize={textSize}
          handleTextSizeChange={handleTextSizeChange}
        />
      </SettingsMenu>
    </>
  );
}
