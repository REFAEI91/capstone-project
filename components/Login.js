import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";
const Button = styled.button`
  display: grid;
  place-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0.7rem;
`;
export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>
          <Image src="/logout.svg" width={32} height={32} alt="logo" />
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button onClick={() => signIn()}>
        <Image src="/login.svg" width={32} height={32} alt="logo" />
        Sign in
      </Button>
    </>
  );
}
