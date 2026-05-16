import Image from "next/image";
import Avatar from "@image/avatar.jpg";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="pt-[74px]">
      <h2 className="text-3xl text-center w-full font-bold">About me</h2>
      <h3 className="text-[--label] text-center w-full">My introduction</h3>
      <div className="flex flex-wrap mt-16 gap-16 justify-center items-start">
        <Image className="about__img w-[300px]" src={Avatar} alt="avatar" />
        <div className="about__info max-md:w-full md:max-w-[560px]  max-md:text-center">
          <div className="grid gap-4 grid-cols-2 mb-4">
            <div className="about__card border border-[--label] rounded-lg p-4 text-center">
              <h3 className="text-bold">Experience</h3>
              <p className="text-[--label]">4+ years working</p>
            </div>
            <div className="about__card border border-[--label] rounded-lg p-4 text-center">
              <h3 className="text-bold">Joined</h3>
              <p className="text-[--label]">6 projects</p>
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[--label]  text-justify">
              Frontend Engineer with 4+ years of experience building scalable
              and maintainable web applications using React, Next.js, and modern
              frontend technologies, with a strong focus on reusable component
              systems, scalable frontend architecture, UI consistency,
              performance optimization and complex business platforms including
              ERP, HRM, CRM, and internal management systems.
            </li>
            <li className="text-[--label]  text-justify">
              Skilled in collaborating closely with UX/UI designers, backend
              engineers, and product teams to deliver responsive and
              user-centric web applications aligned with business requirements.
            </li>
            <li className="text-[--label]  text-justify">
              Previously worked extensively with Vue.js ecosystems (Vue 2 / Vue
              3) before transitioning into React-focused product development
              using TypeScript, modern state management, and scalable frontend
              patterns.
            </li>
            <Link
              href={process.env.NEXT_PUBLIC_CV_PATH || ""}
              target="_blank"
              className="bg-[var(--secondary)] text-white rounded-full px-6 py-4 w-fit"
            >
              View CV
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
