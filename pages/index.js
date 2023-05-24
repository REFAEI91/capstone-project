import CardList from "@/components/CardList/CardList";
import Head from "next/head";
export default function HomePage({
  toggleBookmark,
  medicationsList,
  isDarkMode,
}) {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <CardList
        medications={medicationsList}
        toggleBookmark={toggleBookmark}
        isDarkMode={isDarkMode}
      />
    </>
  );
}
