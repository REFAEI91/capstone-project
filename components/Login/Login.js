import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button, Section, StyledImage, List } from "./Login.styled";

export default function Login({ isDarkMode, medicationPlan }) {
  const { data: session } = useSession();
  const myPlans = medicationPlan.filter((plan) => plan.for === "Me");
  return (
    <>
      {session ? (
        <Section>
          <p>Welcome back :</p>
          <p>{session.user.name}</p>
          <StyledImage
            src={session.user.image}
            width={40}
            height={40}
            alt={session.user.name}
          />
          <List>
            <h4>
              Your active plans : (<span>{myPlans.length}</span>)
            </h4>
            {myPlans.map((plan) => (
              <li key={plan.id}>
                {plan.medication_name} bis ({plan.refill})
              </li>
            ))}
          </List>
          <Button onClick={() => signOut()} isDarkMode={isDarkMode}>
            <Image src="/logout.svg" width={32} height={32} alt="logout" />
            Sign out
          </Button>
        </Section>
      ) : (
        <Section>
          <p>You are not logged in</p>
          <Button onClick={() => signIn()} isDarkMode={isDarkMode}>
            <Image src="/login.svg" width={32} height={32} alt="login" />
            Sign in
          </Button>
        </Section>
      )}
    </>
  );
}
