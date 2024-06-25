import LoginBtn from "./LoginBtn";
import Nav from "./Nav";
import React from "react";

export default function Header() {
  return (
    <header className="min-w-full py-3 px-6 grid grid-cols-3 items-center bg-background text-foreground text-lg">
      <h1 className="justify-self-start mx-3">Logo here</h1>
      <Nav />
      <LoginBtn />
    </header>
  );
}
