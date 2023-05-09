import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "@/components/Layout";
import { medications } from "@/lib/db";

export default function App({ Component, pageProps }) {
  const [medicationsList, setMedicationsList] = useState(medications);

  function toggleBookmark(id) {
    const updatedMedications = medicationsList.map((medicationsList) => {
      if (medicationsList.id === id) {
        return {
          ...medicationsList,
          isBookmarked: !medicationsList.isBookmarked,
        };
      } else return medicationsList;
    });
    setMedicationsList(updatedMedications);
    localStorage.setItem("medicationsList", JSON.stringify(updatedMedications));
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        toggleBookmark={toggleBookmark}
        medicationsList={medicationsList}
      />
    </Layout>
  );
}
