import Link from "next/link";
import Header from "../Header/Header";
import Image from "next/image";
import { NavBar } from "../Layout/Layout.styled";
import { useRouter } from "next/router";
export default function Layout({
  children,
  isDarkMode,
  toggleDarkMode,
  medicationPlan,
}) {
  const { asPath } = useRouter();
  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        medicationPlan={medicationPlan}
      />
      {children}
      <NavBar isDarkMode={isDarkMode}>
        <Link href="/">
          <Image
            src="/home.svg"
            width={35}
            height={35}
            alt="home"
            className={asPath === "/" ? "active" : ""}
          />
        </Link>
        <Link href="/Bookmarks">
          <Image
            src="/bookmark.svg"
            width={35}
            height={35}
            alt="bookmark"
            className={asPath === "/Bookmarks" ? "active" : ""}
          />
        </Link>
        <Link href="/plan">
          <Image
            src="/plan.svg"
            width={35}
            height={35}
            alt="plan"
            className={asPath === "/plan" ? "active" : ""}
          />
        </Link>
        <Link href="/profile">
          <Image
            src="/profile.svg"
            width={35}
            height={35}
            alt="profile"
            className={asPath === "/profile" ? "active" : ""}
          />
        </Link>
      </NavBar>
    </>
  );
}
