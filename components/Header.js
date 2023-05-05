import styled from "styled-components";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 2%;
  left: 3%;

  @media screen and (max-width: 600px) {
    width: 70px;
    mid-height: 70px;
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
