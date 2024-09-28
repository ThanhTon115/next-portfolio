"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { MenuItems } from "./types";
import "./styles.scss";
import Lottie from "lottie-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavItems = React.memo(
  ({
    active,
    setActive,
  }: {
    active: string;
    setActive: (activeString: string) => void;
  }) => {
    return (
      <>
        {MenuItems?.map((e) => (
          <li className="nav__item min-w-[70px]" key={e.title}>
            <Link
              href={e.path}
              className={`nav__link flex max-md:flex-col max-sm:items-center ${
                active === e.path || (e.path === "#home" && !active)
                  ? "font-bold"
                  : ""
              }`}
              onClick={() => {
                setActive(e.path);
              }}
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
  }
);

const Header = () => {
  const location = usePathname();
  const [active, setActive] = useState(() => window.location.hash || "");
  const [toggle, setToggle] = useState(false);
  const collapseMenu = useRef<boolean>(window.innerWidth > 640);
  useEffect(() => {
    const resetToggle = (e: any) => {
      if (e.target?.innerWidth < 640 && collapseMenu.current) {
        collapseMenu.current = false;
        return;
      }
      if (e.target?.innerWidth > 639 && !collapseMenu.current) {
        collapseMenu.current = true;
        setToggle(false);
      }
    };
    window.addEventListener("resize", resetToggle);
    return () => {
      window.removeEventListener("resize", resetToggle);
    };
  }, []);
  return (
    <>
      <nav className="w-full flex justify-between px-8 py-6 m-auto border-b-2 fixed max-sm:bottom-0 ">
        <Link href="" className="nav__logo bold font-bold">
          Thanh Toan
        </Link>
        <div className="nav__menu">
          <ul
            className={`nav__list flex flex-1 gap-4 max-sm:hidden max-sm:bottom-0 left-0 bg-white `}
          >
            <NavItems
              active={active}
              setActive={useCallback((activeString) => {
                setActive(activeString);
              }, [])}
            />
          </ul>
          <ul
            className={`${
              toggle ? "closed" : ""
            } nav__list flex-1 gap-12 wrap sm:hidden grid grid-cols-3 hover:auto-cols-min absolute bottom-0 w-full left-0 bg-white px-8 py-12 rounded-t-xl shadow-inner`}
          >
            <NavItems
              active={active}
              setActive={useCallback((activeString) => {
                setActive(activeString);
              }, [])}
            />
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
    </>
  );
};

export default Header;
