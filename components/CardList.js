import { medications } from "@/lib/db";
import styled from "styled-components";
import Card from "./Card";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function CardList() {
  return (
    <>
      <section>
        <input type="text" placeholder="Search" />
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
