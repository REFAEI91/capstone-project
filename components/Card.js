import { medications } from "@/lib/db";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 0px groove #ccc;
  padding: 1.3em;
  border-radius: 5px;
  margin: 1.5em;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  @media (max-width: 375px) {
    margin: 5%;
  }
`;
const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;
const Summary = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
`;
export default function Card() {
  return (
    <div>
      {medications.map((medication) => (
        <CardContainer key={medication.id}>
          <Title>{medication.name}</Title>
          <Summary>{medication.summury}</Summary>
        </CardContainer>
      ))}
    </div>
  );
}
