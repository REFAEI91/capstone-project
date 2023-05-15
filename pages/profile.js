import Head from "next/head";
import PlanList from "@/components/PlanList/PlanList";
import ProfileForm from "@/components/ProfileForm/ProfileForm";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

export default function Profile({ medicationPlan }) {
  const [plans, setPlans] = useImmerLocalStorageState("medicationPlan", {
    defaultValue: [],
  });
  const handleEditPlan = (updatedPlan) => {
    const updatedPlans = plans.map((plan) => {
      if (plan.id === updatedPlan.id) {
        return updatedPlan;
      } else {
        return plan;
      }
    });
    setPlans(updatedPlans);
  };

  const handleDeletePlan = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
  };
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileForm medicationPlan={medicationPlan} />
      <PlanList
        plans={plans}
        onEditPlan={(updatedPlan) => handleEditPlan(updatedPlan)}
        onDeletePlan={handleDeletePlan}
      />
    </>
  );
}
