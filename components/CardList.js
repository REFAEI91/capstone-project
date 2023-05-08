import { medications } from "@/lib/db";
import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const SearchBar = styled.section`
  margin: 1em;
  display: flex;
`;
const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: width 0.3s ease-in-out;
  width: 20%;
  margin: 0 auto;

  &:focus {
    outline: none;
    width: 100%;
  }
`;
const Results = styled.p`
  text-align: center;
`;
export default function CardList() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredMedications = medications.filter(
    (medication) =>
      medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <SearchBar>
        <Input type="text" placeholder="Search" onChange={handleInputChange} />
      </SearchBar>
      {filteredMedications.length > 0 ? (
        <List>
          {searchQuery && (
            <Results>
              {filteredMedications.length === 1
                ? `1 result found`
                : `${filteredMedications.length} results found `}
            </Results>
          )}
          {filteredMedications.map((medication) => (
            <li key={medication.id}>
              <Card medication={medication} />
            </li>
          ))}
        </List>
      ) : (
        <Results>No results found</Results>
      )}
    </>
  );
}
