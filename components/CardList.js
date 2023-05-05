import { medications } from "@/lib/db";
import styled from "styled-components";
import Card from "./Card";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function CardList() {
  return (
    <List>
      {medications.map((medication) => (
        <Card key={medication.id} medication={medication} />
      ))}
    </List>
  );
}
