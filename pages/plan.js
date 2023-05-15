import Head from "next/head";
import Form from "../components/Form/Form";

export default function Plan({
  medicationPlan,
  forSomeoneElse,
  handleForChange,
  handleSubmit,
}) {
  return (
    <>
      <Head>
        <title>Plan</title>
      </Head>
      <Form
        medicationPlan={medicationPlan}
        forSomeoneElse={forSomeoneElse}
        handleForChange={handleForChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
