import Head from "next/head";
import Form from "../components/Form/Form";
import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Plan({
  medicationPlan,
  forSomeoneElse,
  handleForChange,
  handleSubmit,
}) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null); // Define the session state

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      setSession(session); // Set the session state
      setLoading(false);
    };
    securePage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSignIn = () => {
    signIn();
  };

  return (
    <>
      <Head>
        <title>Plan</title>
      </Head>
      {!session && (
        <div>
          <p>You are not logged in. Please sign in to continue.</p>
          <button onClick={handleSignIn}>Sign in</button>
        </div>
      )}
      {session && (
        <Form
          medicationPlan={medicationPlan}
          forSomeoneElse={forSomeoneElse}
          handleForChange={handleForChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
