"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { MenuItems } from "./types";
import "./styles.scss";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

const NavItems = React.memo(() => {
  return (
    <>
      {MenuItems?.map((e) => (
        <li className="nav__item font-bolds min-w-[70px]" key={e.title}>
          <Link
            href={e.path}
            className={`nav__link flex max-md:flex-col max-sm:items-center justify-center`}
          >
            <Lottie
              animationData={e.iconPath}
              className="w-[24px] transparent top-[-16px] left-[-32px] max-sm:left-0 max-sm:top-2 max-sm:block hidden"
            />
            {e.title}
          </Link>
        </li>
      ))}
    </>
  );
});

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const collapseMenu = useRef<boolean>();

  const resetToggle = useCallback((e: any) => {
    if (e.target?.innerWidth < 640 && collapseMenu.current) {
      collapseMenu.current = false;
      return;
    }
    if (e.target?.innerWidth > 639 && !collapseMenu.current) {
      collapseMenu.current = true;
      setToggle(false);
    }
  }, []);
  useEffect(() => {
    collapseMenu.current = window?.innerWidth > 640;
    window.addEventListener("resize", resetToggle);
    return () => {
      window.removeEventListener("resize", resetToggle);
    };
  }, []);
  return (
    <>
      <header className="w-full border-b-2 fixed max-sm:bottom-0 sm:top-0 bg-white z-10">
        <nav className=" flex justify-between px-8 py-6 m-auto md:max-w-[80%]">
          <Link href="" className="nav__logo bold font-bold">
            Thanh Toan
          </Link>
          <div className="nav__menu">
            <ul
              className={`nav__list flex flex-1 gap-4 max-sm:hidden max-sm:bottom-0 left-0 bg-white `}
            >
              <NavItems />
            </ul>
            <ul
              className={`${
                toggle ? "closed" : ""
              } nav__list flex-1 gap-12 wrap sm:hidden grid grid-cols-3 absolute bottom-0 w-full left-0 bg-white px-8 py-12 rounded-t-xl shadow-inner`}
            >
              <NavItems />
            </ul>
            <div
              className={`cursor-pointer nav__menu max-sm:block hidden relative z-10 ${
                toggle ? "close" : ""
              }`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <span className="line line--st"></span>
              <span className="line line--nd"></span>
              <span className="line line--rd"></span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
