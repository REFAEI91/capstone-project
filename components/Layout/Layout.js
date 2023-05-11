import Link from "next/link";
import Header from "../Header/Header";
import Image from "next/image";
import { NavBar } from "../Layout/Layout.styled";
import { useState } from "react";
export default function Layout({ children }) {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      <Header />
      {children}
      <NavBar>
        <Link href="/" onClick={() => setActiveLink("home")}>
          <Image
            src="/home.svg"
            width={35}
            height={35}
            alt="home"
            className={activeLink === "home" ? "active" : ""}
          />
        </Link>
        <Link href="/Bookmarks" onClick={() => setActiveLink("bookmarks")}>
          <Image
            src="/bookmark.svg"
            width={35}
            height={35}
            alt="bookmark"
            className={activeLink === "bookmarks" ? "active" : ""}
          />
        </Link>
        <Link href="/plan" onClick={() => setActiveLink("plan")}>
          <Image
            src="/plan.svg"
            width={35}
            height={35}
            alt="plan"
            className={activeLink === "plan" ? "active" : ""}
          />
        </Link>
        <Link href="/profile" onClick={() => setActiveLink("profile")}>
          <Image
            src="/profile.svg"
            width={35}
            height={35}
            alt="profile"
            className={activeLink === "profile" ? "active" : ""}
          />
        </Link>
      </NavBar>
    </>
  );
}
