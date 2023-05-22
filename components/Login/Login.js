import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./Login.styled";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>
          <Image src="/logout.svg" width={32} height={32} alt="logout" />
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button onClick={() => signIn()}>
        <Image src="/login.svg" width={32} height={32} alt="login" />
        Sign in
      </Button>
    </>
  );
}
