import dynamic from "next/dynamic";

const QualificationTabs = dynamic(
  () =>
    import("./qualification/QualificationTabs").then(
      (mod) => mod.QualificationTabs
    ),
  { ssr: false }
);
export default function Experience() {
  return (
    <section id="qualification" className="pt-[74px]">
      <h2 className="text-3xl text-center w-full font-bold">Qualification</h2>
      <h3 className="text-[--label] text-center w-full">My personal journey</h3>
      <QualificationTabs />
    </section>
  );
}
