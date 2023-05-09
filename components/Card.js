import { Goldman } from "@next/font/google";
import styled from "styled-components";
import { useState } from "react";
import BookmarkButton from "./BookmarkButton";

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
});

const Container = styled.section`
  display: grid;
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
`;
const Summary = styled.p``;
const Button = styled.button`
  justify-self: flex-end;
  color: black;
  padding: 0.3rem;
  border: 0.1px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
    background-color: #fff8de;
  }
`;
const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`;
const Span = styled.span`
  font-family: ${goldman.style.fontFamily};
  font-size: 1rem;
  background-color: #fff8de;
`;

export default function Card({ medication, toggleBookmark }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  // console.log(medication.isBookmarked);
  return (
    <Container>
      <BookmarkButton medication={medication} toggleBookmark={toggleBookmark} />
      <Title>{medication.name}</Title>
      <Summary>{medication.summary}</Summary>
      <Button onClick={() => handleClick(medication.id)}>
        {isExpanded ? "Less Info ⌃ " : "More Info ⌵"}
      </Button>
      {isExpanded && (
        <DetailsList>
          <li>
            <Span>Mechanism of Action : </Span>
            <br /> {medication.mechanismOfAction}
          </li>
          <li>
            <Span>Uses : </Span>
            <br /> {medication.uses}
          </li>
          <li>
            <Span>Side Effects : </Span>
            <br /> {medication.sideEffects}
          </li>
          <li>
            <Span>Dosage And Administration : </Span>
            <br />
            {medication.dosageAndAdministration}
          </li>
          <li>
            <Span>Precautions : </Span> <br />
            {medication.precautions}
          </li>
        </DetailsList>
      )}
    </Container>
  );
}
