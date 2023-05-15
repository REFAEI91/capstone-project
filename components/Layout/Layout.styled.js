import styled from "styled-components";
export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;

  .active {
    padding: 0.2rem;
    margin: 0.1rem;
    background-color: #abc4aa;
    border-style: groove;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    transition: all 0.3s ease-out;
  }
`;
