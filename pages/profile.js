import Head from "next/head";
import PlanList from "@/components/PlanList/PlanList";
import ProfileForm from "@/components/ProfileForm/ProfileForm";

export default function Profile({ medicationPlan }) {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileForm medicationPlan={medicationPlan} />
      <PlanList plans={medicationPlan} />
    </>
  );
}
