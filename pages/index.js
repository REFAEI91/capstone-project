import CardList from "@/components/CardList";
import Head from "next/head";
export default function HomePage({ toggleBookmark, medicationsList }) {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <CardList medications={medicationsList} toggleBookmark={toggleBookmark} />
    </>
  );
}
