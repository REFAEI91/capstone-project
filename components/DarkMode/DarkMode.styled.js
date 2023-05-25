import styled from "styled-components";
import Image from "next/image";
export const ToggleContainer = styled.div`
  .background {
    background: #fff;
    z-index: -1;
  }
`;

export const Label = styled.label`
  width: 4rem;
  height: 1.6rem;
  margin-right: 1rem;
  margin-left: 1rem;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.3s;

  &:after {
    content: "";
    width: 1.55rem;
    height: 1.55rem;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  &:active:after {
    width: 1.5rem;
  }

  input:checked + & {
    background: #242424;
  }

  input:checked + &:after {
    left: 100%;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
`;
export const StyledImageSun = styled(Image)`
  position: absolute;
  z-index: 100;
  filter: ${({ darkMode }) =>
    darkMode ? "sepia(1) saturate(1) hue-rotate(180deg)" : ""};
  fill: ${({ darkMode }) => (darkMode ? "yellow" : "")};
`;

export const StyledImageMoon = styled(Image)`
  position: absolute;
  right: 1px;
  z-index: 100;
  filter: ${({ darkMode }) =>
    darkMode && "invert(10) sepia(0.5) saturate(0.2) hue-rotate(180deg)"};
`;
export const Input = styled.input`
  visibility: hidden;
  &:checked + ${Label} .background {
    background: #242424;
  }
`;
export const Title = styled.p`
  position: absolute;
  width: 5rem;
  top: 0.6rem;
`;
