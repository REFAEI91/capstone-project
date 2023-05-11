import styled from "styled-components";
export const List = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  background-color: ${(props) =>
    props.importance === "High"
      ? "#F0c3be"
      : props.importance === "Medium"
      ? "#e0EFB5"
      : "#EAFBEA"};
`;
