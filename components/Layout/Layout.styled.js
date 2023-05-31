import styled from "styled-components";
export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 0.1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; /* Add this line */
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#43474c" : "#fff")};
  padding-top: 2%;

  .active {
    padding: 0.2rem;
    margin: 0.1rem;
    border: 2px groove black;
    border-radius: 5px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "")};
  }
`;
