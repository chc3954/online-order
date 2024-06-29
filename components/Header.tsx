import LoginBtn from "./LoginBtn";
import Nav from "./Nav";
import React from "react";
import logo from "../asset/images/chicken_torso.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="min-w-full py-3 px-6 grid grid-cols-5 items-center bg-black text-white text-lg">
      <Link href="/" className="w-10">
        <Image src={logo} alt="logo" />
      </Link>
      <Nav />
      <LoginBtn />
    </header>
  );
}
