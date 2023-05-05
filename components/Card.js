import { medications } from "@/lib/db";
import { Goldman } from "@next/font/google";
import styled from "styled-components";

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});

const CardContainer = styled.section`
  padding: 1.3em;
  border-radius: 5px;
  margin: 1.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  @media (max-width: 375px) {
    margin: 5%;
  }
`;
const Title = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
  font-family: ${goldman.style.fontFamily};

  @media (max-width: 375px) {
    word-wrap: break-word;
  }
`;
const Summary = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
  word-wrap: break-word;
`;
const Ul = styled.ul`
  list-style: none;
`;

export default function Card() {
  return (
    <Ul>
      {medications.map((medication) => (
        <li key={medication.id}>
          <CardContainer>
            <Title>{medication.name}</Title>
            <Summary>{medication.summary}</Summary>
          </CardContainer>
        </li>
      ))}
    </Ul>
  );
}
