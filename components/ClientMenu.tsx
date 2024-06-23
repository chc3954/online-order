"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const TABS: { [key: string]: string } = { home: "/", menu: "/menu", contact: "/contact" };

export default function ClientMenu() {
  const pathname = usePathname();
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  useEffect(() => {
    const currentTab = Object.keys(TABS).find((key) => TABS[key] === pathname) || "home";
    setSelectedMenu(currentTab);
  }, [pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMenu(e.target.value);
  };

  return (
    <ul className="justify-self-center list-none font-bold uppercase">
      {Object.keys(TABS).map((key) => (
        <li key={key} className="group inline-block mx-3 cursor-pointer">
          <input
            type="radio"
            id={key}
            name="menu"
            value={key}
            checked={selectedMenu === key}
            onChange={handleChange}
            className="hidden"
          />
          <label htmlFor={key} className={selectedMenu === key ? "text-highlight" : ""}>
            <Link href={TABS[key]}>{key}</Link>
          </label>
          <span
            className={`block m-auto max-w-0 group-hover:max-w-full transition-all duration-100 ease-in-out h-0.5 ${
              selectedMenu === key ? "bg-highlight" : "bg-foreground"
            }`}
          ></span>
        </li>
      ))}
    </ul>
  );
}
