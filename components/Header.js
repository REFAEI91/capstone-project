import styled from "styled-components";
import { Goldman } from "@next/font/google";

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});
const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  justify-content: space-evenly;
`;
const Title = styled.h1`
  font-family: ${goldman.style.fontFamily};
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
`;
const Logo = styled.img`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  @media (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
`;
export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/logo.svg" width={100} height={100} alt="logo" />
      <Title>MediPlan</Title>
    </HeaderContainer>
  );
}
