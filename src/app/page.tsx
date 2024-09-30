import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Technical from "@/components/Technical";
import dynamic from "next/dynamic";

const Qualification = dynamic(() => import("@/components/Qualification"), {
  ssr: false,
});

export default function App() {
  return (
    <main className="m-auto md:max-w-[80%] px-8 overflow-x-hidden">
      <Home />
      <About />
      <Technical />
      <Qualification />
      <Contact />
    </main>
  );
}
