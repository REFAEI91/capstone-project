import Login from "../Login/Login";
import { HeaderContainer, Title, Logo } from "./Header.styled";
export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/logo.svg" width={100} height={100} alt="logo" />
      <Title>MediPlan</Title>
      <Login />
    </HeaderContainer>
  );
}
