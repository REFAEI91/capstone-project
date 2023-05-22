import Head from "next/head";
import PlanList from "@/components/PlanList/PlanList";
import ProfileForm from "@/components/ProfileForm/ProfileForm";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Profile({ medicationPlan }) {
  const [plans, setPlans] = useImmerLocalStorageState("medicationPlan", {
    defaultValue: [],
  });
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      setSession(session);
      setLoading(false);
    };
    securePage();
  }, []);

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

  const handleSignIn = () => {
    signIn();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      {!session && (
        <div>
          <p>You are not logged in. Please sign in to continue.</p>
          <button onClick={handleSignIn}>Sign in</button>
        </div>
      )}
      {session && (
        <>
          <ProfileForm medicationPlan={medicationPlan} />
          <PlanList
            plans={plans}
            onEditPlan={(updatedPlan) => handleEditPlan(updatedPlan)}
            onDeletePlan={handleDeletePlan}
          />
        </>
      )}
    </>
  );
}
