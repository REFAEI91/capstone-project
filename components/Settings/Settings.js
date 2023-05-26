import { useState } from "react";
import Login from "../Login/Login";
import DarkMode from "../DarkMode/DarkMode";
import styled from "styled-components";
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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <SettingsButton onClick={toggleMenu}>
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

        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </SettingsMenu>
    </>
  );
}
