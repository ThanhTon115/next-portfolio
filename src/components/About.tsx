import Image from "next/image";
import Avatar from "@image/avatar.jpg";

const CvUrl =
  "https://drive.google.com/file/d/12Aw979O118oyRCsFlgPRMMvgS53pObsY/view";
export default function About() {
  return (
    <section id="about" className="pt-[74px]">
      <h2 className="text-3xl text-center w-full font-bold">About me</h2>
      <h3 className="text-[--label] text-center w-full">My introduction</h3>
      <div className="flex flex-wrap mt-16 gap-16 justify-center items-start">
        <Image
          className="about__img w-[300px]"
          src={Avatar}
          alt="avatar"
        />
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
          <div className="flex flex-col gap-2">
            <p className="text-[--label]  text-justify">
              Frontend Developer with 4+ years of experience building scalable
              and maintainable web applications.
            </p>
            <p className="text-[--label]  text-justify">
              Specializing in React and Next.js, with strong experience in
              building production-ready, scalable frontend systems. Previously
              worked extensively with Vue.js (Vue 2 / Vue 3).
            </p>
            <p className="text-[--label]  text-justify">
              Experienced in frontend architecture design, Design Systems, and
              performance optimization for complex product environments.
            </p>
            <a
              href={CvUrl}
              target="_blank"
              className="bg-[var(--secondary)] text-white rounded-full px-6 py-4 w-fit"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
