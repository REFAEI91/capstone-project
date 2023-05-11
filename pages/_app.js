import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { medications } from "@/lib/db";

export default function App({ Component, pageProps }) {
  const [medicationsList, setMedicationsList] = useState(medications);
  const [medicationPlan, setMedicationPlan] = useState([]);
  const [forSomeoneElse, setForSomeoneElse] = useState(false);
  const handleForChange = (event) => {
    setForSomeoneElse(event.target.value === "Someone else");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const frequency = [];
    for (let [key, value] of formData.entries()) {
      if (key.startsWith("frequency")) {
        frequency.push(value);
      }
    }
    const plan = {
      ...Object.fromEntries(formData.entries()),
      frequency,
    };
    setMedicationPlan((prevPlan) => [...prevPlan, plan]);
  };
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
        medicationPlan={medicationPlan}
        forSomeoneElse={forSomeoneElse}
        handleForChange={handleForChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
}
