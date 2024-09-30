import dynamic from "next/dynamic";
import { technologies } from "./types";
const BallCanvas = dynamic(
  () => import("./canvas/Ball").then((mod) => mod.BallCanvas),
  {
    ssr: false, // This ensures it only runs on the client
  }
);
export default function Technical() {
  return (
    <section id="skills" className="pt-[74px] mb-8">
      <h2 className="text-3xl text-center w-full font-bold">Techical skills</h2>
      <h3 className="text-[--label] text-center w-full">My skills</h3>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16 max-w-[1024px] mx-auto">
        {technologies.map((technology) => (
          <div className="w-28 h-28 text-center" key={technology.name}>
            <BallCanvas icon={technology.icon?.src} />
            <p className="text-[--label]">{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
