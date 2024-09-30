"use client";

import Lottie from "lottie-react";
import GitIcon from "@image/github.json";
import LinkedinIcon from "@image/linkedin.json";

export default function Social() {
  const handleViewGit = () => {
    window.open("https://github.com/ThanhTon115", "_blank");
  };
  const handleViewLinkedin = () =>
    window.open("https://www.linkedin.com/in/toan-tran-a9394b1b9/", "_blank");
  return (
    <>
      <Lottie
        animationData={GitIcon}
        className="w-[56px] max-sm:w-[16vw] max-w-[56px] transparent cursor-pointer"
        onClick={handleViewGit}
      />
      <Lottie
        animationData={LinkedinIcon}
        className="w-[56px] max-sm:w-[16vw] max-w-[56px] transparent cursor-pointer"
        onClick={handleViewLinkedin}
      />
    </>
  );
}
