"use client";
import Lottie from "lottie-react";
import { TimelineTree } from "./TimelineTree";
import { WorkIcon, EducationIcon } from "@image/index";
import { useState } from "react";
import { Education } from "./Education";

export function QualificationTabs() {
  const [tab, setTab] = useState("experience");
  return (
    <>
      <div
        className={`flex gap-2 cursor-pointer justify-center`}
        onClick={() => {
          if (tab === "experience") {
            return;
          }
          setTab("experience");
        }}
      >
        <Lottie animationData={WorkIcon} className="w-[32px]" />
        <h3 className="my-8 font-bold">Experience</h3>
      </div>
      <TimelineTree />
      <div
        className={`flex gap-2 cursor-pointer justify-center mt-8`}
        onClick={() => {
          if (tab === "education") {
            return;
          }
          setTab("education");
        }}
      >
        <Lottie animationData={EducationIcon} className="w-[32px]" />
        <h3 className="my-8 font-bold">Education</h3>
      </div>
      <Education className="text-center" />
    </>
  );
}
