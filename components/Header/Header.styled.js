import styled from "styled-components";
import { Goldman } from "@next/font/google";

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});
export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-family: ${goldman.style.fontFamily};
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
`;
export const Logo = styled.img`
  top: 0.5rem;
  left: 0.5rem;

  @media (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
`;
