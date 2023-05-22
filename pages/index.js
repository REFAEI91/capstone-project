import CardList from "@/components/CardList/CardList";
import Login from "@/components/Login";
import Head from "next/head";
export default function HomePage({ toggleBookmark, medicationsList }) {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <Login />
      <CardList medications={medicationsList} toggleBookmark={toggleBookmark} />
    </>
  );
}
