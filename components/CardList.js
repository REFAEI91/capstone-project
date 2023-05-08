import { medications } from "@/lib/db";
import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function CardList() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(searchQuery);
  const filteredMedications = medications.filter(
    (medication) =>
      medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredMedications);
  return (
    <>
      <section>
        <input type="text" placeholder="Search" onChange={handleInputChange} />
      </section>
      <List>
        {filteredMedications.length > 0 ? (
          <>
            {searchQuery && <p>{filteredMedications.length} results found</p>}
            {filteredMedications.map((medication) => (
              <li key={medication.id}>
                <Card medication={medication} />
              </li>
            ))}
          </>
        ) : (
          <p>No results found</p>
        )}
      </List>
    </>
  );
}
