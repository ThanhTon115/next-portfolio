import Image from "next/image";
import Social from "./Social";
import Avatar from "@image/avatar.jpg";
import "./styles.scss";

export default function Home() {
  return (
    <section
      id="home"
      className="pt-[5rem] flex justify-between gap-12 max-lg:flex-wrap max-lg:justify-center"
    >
      <div className="home__social flex flex-col gap-6 justify-center order-1">
        <Social />
      </div>
      <div className="home__data flex flex-col gap-4 justify-center lg:max-w-[50%] max-lg:w-full order-2 max-lg:order-3">
        <h1 className="text-4xl font-bold">Thanh Toan</h1>
        <h3 className="home_subtitle text-[var(--secondary)]">
          Frontend Developer
        </h3>
        <p className="home__description text-[var(--label)] text-justify">
          I'm a Frontend Developer in Ho Chi Minh City, i'm a quick learner and
          ready to learn new technologies and capable of working effectively
          under pressure.
        </p>
        <a
          href="#contact"
          className="bg-[var(--secondary)] text-white rounded-full px-6 py-4 w-fit flex gap-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 128 128"
            id="send"
          >
            <g clipPath="url(#a)">
              <path
                stroke="#fff"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M95.9184 25.8362C99.3973 24.7305 102.676 28.009 101.57 31.4879L80.0168 99.3019C78.8666 102.921 74.028 103.576 71.9567 100.394L59.5688 81.3609C58.5913 79.8591 58.598 77.9205 59.5858 76.4255L72.1237 57.4492C72.7017 56.5744 71.7151 55.513 70.8004 56.0257L50.8325 67.2169C49.4047 68.0171 47.655 67.979 46.2634 67.1173L27.3691 55.418C24.1003 53.394 24.711 48.468 28.375 47.3035L95.9184 25.8362Z"
              ></path>
            </g>
            <defs>
              <clipPath id="a">
                <rect width="128" height="128" fill="#fff"></rect>
              </clipPath>
            </defs>
          </svg>
          Contact me
        </a>
      </div>
      <Image
        className="home__img my-auto max-w-[300px] max-sm:!w-[50%] order-3 max-lg:order-2"
        src={Avatar}
        alt="avatar"
      />
    </section>
  );
}
