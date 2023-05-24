import { useState } from "react";
import Login from "../Login/Login";
import DarkMode from "../DarkMode/DarkMode";
import styled from "styled-components";

export default function Settings({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const SettingsButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0.8rem;
    cursor: pointer;
    ${isDarkMode &&
    `
      filter: invert(1);
    `}
  `;
  const SettingsMenu = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 7rem;
    background: rgb(255, 255, 255);

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);

    ${isMenuOpen &&
    `
      transform: translateX(0);
    `}
    ${isDarkMode &&
    `
background-color: gray;
    `}
  `;

  const StyledImage = styled.img`
    width: 35px;
    height: 35px;
    filter: ${(props) => (props.isDarkMode ? "invert(1)" : "none")};
  `;

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
      <SettingsMenu isOpen={isMenuOpen}>
        <SettingsButton onClick={toggleMenu}>
          <StyledImage src="/close.svg" width={35} height={35} alt="close" />
          Close
        </SettingsButton>
        <Login />
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </SettingsMenu>
    </>
  );
}
