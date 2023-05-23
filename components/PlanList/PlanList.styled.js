import styled from "styled-components";
export const List = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  background-color: ${(props) =>
    props.importance === "High"
      ? "#a97d79"
      : props.importance === "Medium"
      ? "#a9af96"
      : "#b3c5d3"};
`;
export const Title = styled.h2`
  font-size: 1.25rem;
  border-radius: 5px;
  display: grid;
  justify-content: center;
`;
export const Span = styled.span`
  background-color: #cad3db;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.2rem;
`;
export const Heading = styled.h3`
  font-size: 1.25rem;
  margin: 1rem;
`;
