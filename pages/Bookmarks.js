import Card from "@/components/Card/Card";
import Head from "next/head";
import styled from "styled-components";

export default function Bookmarks({
  toggleBookmark,
  medicationsList,
  isDarkMode,
}) {
  const Results = styled.p`
    text-align: center;
    margin: 1em;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1.3em;
    border-radius: 5px;
    margin: 1.5em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  `;
  const bookmarkedMedications = medicationsList.filter(
    (medication) => medication.isBookmarked
  );
  return (
    <>
      <Head>
        <title> Bookmarks </title>
      </Head>
      {bookmarkedMedications.length === 0 ? (
        <Results>You don`t have any bookmarked cards yet. </Results>
      ) : (
        bookmarkedMedications.map((medication) => (
          <Card
            key={medication.id}
            medication={medication}
            toggleBookmark={toggleBookmark}
            isDarkMode={isDarkMode}
          />
        ))
      )}
    </>
  );
}
