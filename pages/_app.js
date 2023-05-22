import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { medications } from "@/lib/db";
import { uid } from "uid";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const [medicationsList, setMedicationsList] = useImmerLocalStorageState(
    "medicationsList",
    {
      defaultValue: medications,
    }
  );
  const [medicationPlan, setMedicationPlan] = useImmerLocalStorageState(
    "medicationPlan",
    {
      defaultValue: [],
    }
  );
  const [forSomeoneElse, setForSomeoneElse] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleForChange = (event) => {
    setForSomeoneElse(event.target.value === "Someone else");
  };

  const handleAddMedicationPlanSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let frequency = {};
    for (let [key, value] of formData.entries()) {
      if (key.startsWith("frequency")) {
        const field = key.split("frequency")[1];
        frequency[field] = value;
      }
    }
    const plan = {
      ...Object.fromEntries(formData),
      frequency,
      id: uid(),
    };
    setShowConfirmation(true);
    setMedicationPlan([...medicationPlan, plan]);
    event.target.reset();
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
  }

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          toggleBookmark={toggleBookmark}
          medicationsList={medicationsList}
          medicationPlan={medicationPlan}
          forSomeoneElse={forSomeoneElse}
          handleForChange={handleForChange}
          handleSubmit={handleAddMedicationPlanSubmit}
        />
        <ConfirmationModal
          isOpen={showConfirmation}
          onConfirm={() => {
            setShowConfirmation(false);
          }}
          onCancel={() => setShowConfirmation(false)}
        />
      </Layout>
    </SessionProvider>
  );
}
