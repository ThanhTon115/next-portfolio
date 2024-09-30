import Image from "next/image";
import Avatar from "@image/avatar.jpg";

const CvUrl =
  "https://drive.google.com/file/d/1AvKAUH55t3xzHA7amEYUhAK4kkr8j_hT/view?usp=drive_link";
export default function About() {
  return (
    <section id="about" className="pt-[74px]">
      <h2 className="text-3xl text-center w-full font-bold">About me</h2>
      <h3 className="text-[--label] text-center w-full">My introduction</h3>
      <div className="flex flex-wrap mt-16 gap-16 justify-center">
        <Image
          className="about__img my-auto w-[300px]"
          src={Avatar}
          alt="avatar"
        />
        <div className="about__info max-md:w-full max-md:text-center">
          <div className="grid gap-4 grid-cols-2 mb-4">
            <div className="about__card border border-[--label] rounded-lg p-4 text-center">
              <h3 className="text-bold">Experience</h3>
              <p className="text-[--label]">3 years working</p>
            </div>
            <div className="about__card border border-[--label] rounded-lg p-4 text-center">
              <h3 className="text-bold">Joined</h3>
              <p className="text-[--label]">5 projects</p>
            </div>
          </div>
          <p className="text-[--label] lg:max-w-[360px] mb-6 text-justify">
            Frontend Developer, i have experience in TypeScript and JavaScript
            and expertise in frameworks like React and Vue. I'm a quick learner
            and collaborate closely with clients to create efficient, scalable
            and user-friendly solutions that solve real-world problems.
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
    </section>
  );
}
