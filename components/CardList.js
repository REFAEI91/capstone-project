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
  return (
    <>
      <section>
        <input type="text" placeholder="Search" onChange={handleInputChange} />
      </section>
      <List>
        {medications.map((medication) => (
          <li key={medication.id}>
            <Card medication={medication} />
          </li>
        ))}
      </List>
    </>
  );
}
