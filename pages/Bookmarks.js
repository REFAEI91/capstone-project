import Card from "@/components/Card";
import Head from "next/head";

export default function Bookmarks({ toggleBookmark, medicationsList }) {
  const bookmarkedMedications = medicationsList.filter(
    (medication) => medication.isBookmarked
  );
  return (
    <>
      <Head>
        <title> Bookmarks </title>
      </Head>
      {bookmarkedMedications.length === 0 ? (
        <p>You don`t have any bookmarked cards yet. </p>
      ) : (
        bookmarkedMedications.map((medication) => (
          <Card
            key={medication.id}
            medication={medication}
            toggleBookmark={toggleBookmark}
          />
        ))
      )}
    </>
  );
}
