import Settings from "../Settings/Settings";
import { HeaderContainer, Title, Logo } from "./Header.styled";
export default function Header({ isDarkMode, toggleDarkMode, medicationPlan }) {
  return (
    <HeaderContainer>
      <Logo src="/logo.svg" width={100} height={100} alt="logo" />
      <Title>MediPlan</Title>
      <Settings
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        medicationPlan={medicationPlan}
      />
    </HeaderContainer>
  );
}
