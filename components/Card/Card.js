import { useState } from "react";
import BookmarkButton from "../BookmarkButton";
import { Container, Title, Button, DetailsList, Span } from "./Card.styled";

export default function Card({ medication, toggleBookmark, isDarkMode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Container isDarkMode={isDarkMode}>
      <BookmarkButton
        medication={medication}
        toggleBookmark={toggleBookmark}
        isDarkMode={isDarkMode}
      />
      <Title>{medication.name}</Title>
      <p>{medication.summary}</p>
      <Button onClick={() => handleClick(medication.id)}>
        {isExpanded ? "Less Info ⌃ " : "More Info ⌵"}
      </Button>
      {isExpanded && (
        <DetailsList isDarkMode={isDarkMode}>
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
