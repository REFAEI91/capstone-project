import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button, Section, StyledImage } from "./Login.styled";

export default function Login({ isDarkMode }) {
  console.log(isDarkMode);
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <Section>
          <p>you are logged in as</p>
          <p>{session.user.name}</p>
          <StyledImage
            src={session.user.image}
            width={32}
            height={32}
            alt={session.user.name}
          />
          <Button onClick={() => signOut()} isDarkMode={isDarkMode}>
            <Image src="/logout.svg" width={32} height={32} alt="logout" />
            Sign out
          </Button>
        </Section>
      ) : (
        <Button onClick={() => signIn()} isDarkMode={isDarkMode}>
          <Image src="/login.svg" width={32} height={32} alt="login" />
          Sign in
        </Button>
      )}
    </>
  );
}
