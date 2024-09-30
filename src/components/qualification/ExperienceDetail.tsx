"use client";
import { ExperienceType } from "../types";
import "./styles.scss";
import { motion } from "framer-motion";
export function ExperienceDetail({
  experience,
  side,
  setShow,
}: {
  experience: ExperienceType;
  side: "left" | "right";
  setShow: () => void;
}) {
  const itemVariants = {
    left: {
      hidden: { opacity: 0, x: -250 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    right: {
      hidden: { opacity: 0, x: 250 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
  };
  return (
    <>
      <motion.li
        key={experience.projectName}
        variants={side === "left" ? itemVariants.left : itemVariants.right}
        className={`qualification__data mb-4 lg:gap-x-8 sm:gap-x-4 gap-x-1.5`}
      >
        <div className={`order-${side === "left" ? 1 : 3}`}>
          <h3 className="text-md font-bold">{experience.projectName}</h3>
          <div>{experience.companyName}</div>
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
            <p className="max-sm:text-[10px] text-sm">{experience.date}</p>
          </div>
          <p className="line-clamp-5">{experience.description}</p>
          <div
            className="flex gap-2 experience-item items-center mt-4 text-sm cursor-pointer"
            onClick={() => {
              if (typeof setShow === "function") {
                setShow();
              }
            }}
          >
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="12px"
              viewBox="0 0 24 24"
              width="12px"
              fill="#2e2e39"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
            </svg>
          </div>
        </div>
        <div className={`order-2`}>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
        <div className={`order-${side === "left" ? 3 : 1}`}></div>
      </motion.li>
    </>
  );
}
