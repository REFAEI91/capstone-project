import Link from "next/link";
import Header from "../Header/Header";
import Image from "next/image";
import { NavBar } from "../Layout/Layout.styled";
export default function Layout({ children }) {
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