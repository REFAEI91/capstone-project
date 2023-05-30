import styled from "styled-components";
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const SearchBar = styled.section`
  margin: 1em;
  display: flex;
`;
export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: width 0.3s ease-in-out;
  width: 30%;
  margin: 0 auto;

  &:focus {
    outline: none;
    width: 100%;
  }
`;
export const Results = styled.p`
  text-align: center;
`;
export const FilterContainer = styled.label`
  margin: 1em;
  display: flex;
`;

export const FilterSelect = styled.select`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: width 0.3s ease-in-out;
  margin: 0 auto;
`;
