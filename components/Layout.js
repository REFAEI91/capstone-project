import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import styled from "styled-components";
export default function Layout({ children }) {
  const NavBar = styled.nav`
    position: fixed;
    bottom: 1rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0 1rem;
    background-color: transparent;
  `;
  return (
    <>
      <Header />
      {children}
      <NavBar>
        <Link href="/">
          <Image src="/home.svg" width={35} height={35} alt="home" />
        </Link>
        <Link href="/Bookmarks">
          <Image src="/bookmark.svg" width={35} height={35} alt="bookmark" />
        </Link>
      </NavBar>
    </>
  );
}
