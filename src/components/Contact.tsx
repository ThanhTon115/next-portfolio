"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      alert(
        `Please typing your ${
          !form.email && !form.message
            ? "Email and Message"
            : !form.email
            ? "Email"
            : "Massage"
        }`
      );
      return;
    }
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Thanh Toàn",
          from_email: form.email,
          to_email: "thanhtontran1152000@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <section id="contact" className="pt-[74px] mb-8">
      <h2 className="text-3xl text-center w-full font-bold">Get in touch</h2>
      <h3 className="text-[--label] text-center w-full">Contact me</h3>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16 max-w-[1024px]"></div>
      <form
        ref={(val) => {
          if (val) {
            formRef.current = val;
          }
        }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 sm:p-12 p-8 border-[--label] border-2 rounded-xl sm:max-w-[70%] mx-auto"
      >
        <label className="flex flex-col">
          <span className="border-[--label] mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="py-4 px-6 placeholder:text-secondary rounded-lg border-[--label] border-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="border-[--label] mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            className="py-4 px-6 placeholder:text-secondary rounded-lg border-[--label] border-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="border-[--label] mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="py-4 px-6 placeholder:text-secondary rounded-lg border-[--label] border-2"
          />
        </label>

        <button
          type="submit"
          className="bg-[var(--secondary)] text-white rounded-full px-6 py-4 w-fit flex gap-2 items-center"
        >
          {loading ? "Sending..." : "Send Message"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 128 128"
            id="send"
          >
            <g clipPath="url(#a)">
              <path
                stroke="#fff"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M95.9184 25.8362C99.3973 24.7305 102.676 28.009 101.57 31.4879L80.0168 99.3019C78.8666 102.921 74.028 103.576 71.9567 100.394L59.5688 81.3609C58.5913 79.8591 58.598 77.9205 59.5858 76.4255L72.1237 57.4492C72.7017 56.5744 71.7151 55.513 70.8004 56.0257L50.8325 67.2169C49.4047 68.0171 47.655 67.979 46.2634 67.1173L27.3691 55.418C24.1003 53.394 24.711 48.468 28.375 47.3035L95.9184 25.8362Z"
              ></path>
            </g>
            <defs>
              <clipPath id="a">
                <rect width="128" height="128" fill="#fff"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>
    </section>
  );
}
