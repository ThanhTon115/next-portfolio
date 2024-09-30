import Link from "next/link";
import { FooterItems } from "./types";
import Social from "./Social";

export default function Footer() {
  return (
    <>
      <footer className="text-center py-8 border-t-2">
        <h2 className="font-bold text-[1.5rem]">Thanh Toan</h2>
        <ul
          className={`my-4 flex flex-1 justify-center gap-4 bg-white sm:max-w-[60%] m-auto`}
        >
          {FooterItems?.map((e) => (
            <li className="min-w-[70px]" key={e.title}>
              <Link href={e.path}>{e.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 justify-center max-md:mb-[74px]">
          <Social />
        </div>
      </footer>
    </>
  );
}
