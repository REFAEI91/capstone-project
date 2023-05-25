import Image from "next/image";
import styled from "styled-components";
export const Results = styled.section`
  text-align: center;
  margin: 1em;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.3em;
  border-radius: 5px;
  margin: 1.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

export const Section = styled.section`
  text-align: center;
`;
export const SignInButton = styled.button`
  background-color: #0e7c7b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #0b5655;
  }
`;
export const Button = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  bottom: 1rem;
  left: 4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0.7rem;
  ${(props) => (props.isDarkMode ? "filter: invert(1);" : "")}
`;
export const StyledImage = styled(Image)`
  border-radius: 50%;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
