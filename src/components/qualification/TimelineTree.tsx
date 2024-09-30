"use client";
import { motion } from "framer-motion";
import "./styles.scss";
import { experiences, ExperienceType } from "../types";
import { ExperienceDetail } from "./ExperienceDetail";
import Lottie from "lottie-react";
import { CloseIcon } from "@image/index";
import { useState } from "react";
import Image from "next/image";

export function TimelineTree({ className }: { className?: string }) {
  const [popupValue, setPopupValue] = useState<ExperienceType | null>();
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <motion.ul
        initial="hidden"
        animate
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true }}
        style={{ listStyle: "none", paddingLeft: 0 }}
        className={`qualification__sessions ${className} sm:max-w-[90%] xl:max-w-[70%] `}
      >
        {experiences.map((experience, index) => (
          <ExperienceDetail
            key={experience.projectName}
            side={index % 2 === 1 ? "right" : "left"}
            experience={experience}
            setShow={() => setPopupValue(experience)}
          />
        ))}
      </motion.ul>
      <div
        className={`experience__modal ${
          !!popupValue ? "visible" : "invisible opacity-0"
        }`}
      >
        <div className="experience__modal-content">
          <Lottie
            onClick={() => {
              setPopupValue(null);
            }}
            animationData={CloseIcon}
            className="absolute top-[1.5rem] right-[1.5rem] cursor-pointer w-[1.5rem]"
          />
          {popupValue?.icon?.src && (
            <Image
              width={56}
              height={56}
              src={popupValue?.icon?.src}
              alt={popupValue?.projectName || "--"}
              className="w-[56px] rounded mb-4"
            />
          )}
          <h3 className="font-bold text-lg">{popupValue?.projectName}</h3>
          <span>{popupValue?.companyName}</span>
          <div className={`text-[--label] flex gap-2 items-center my-4`}>
            <svg
              className="max-sm:w-[16px] max-sm:h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              fill="#a4a4a9"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            <p className="max-sm:text-[10px] text-sm">{popupValue?.date}</p>
          </div>
          <ul>
            <li className="mt-4 text-[--label]">
              <span className="font-bold">Description:</span>{" "}
              {popupValue?.description}
            </li>
            <li className="mt-4 text-[--label]">
              <span className="font-bold">Role:</span> {popupValue?.role}
            </li>
            <li className="mt-4 text-[--label]">
              <span className="font-bold">Team size:</span>{" "}
              {popupValue?.teamSize}
            </li>
            <li className="mt-4 text-[--label]">
              <span className="font-bold">Techs/Tools:</span>{" "}
              {popupValue?.teches}
            </li>
            <li className="mt-4 text-[--label]">
              <span className="font-bold">Responsibilities:</span>{" "}
              {popupValue?.responsibilities}
            </li>
            <li className="mt-4 text-[--label]">
              <span className="font-bold">Accomplishments:</span>{" "}
              {popupValue?.accomplishments}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
