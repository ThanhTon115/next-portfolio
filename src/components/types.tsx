import HomeIcon from "@image/home.json";
import AboutIcon from "@image/about.json";
import WorkIcon from "@image/works.json";
import ExperienceIcon from "@image/experience.json";
import MessageIcon from "@image/message.json";
import {
  css,
  figma,
  git,
  html,
  nextjs,
  reactjs,
  tailwind,
  typescript,
  vuejs,
} from "@image/index";
import { StaticImageData } from "next/image";
import React from "react";
export const MenuItems = [
  {
    path: "#home",
    title: "Home",
    iconPath: HomeIcon,
  },
  {
    path: "#about",
    title: "About",
    iconPath: AboutIcon,
  },
  {
    path: "#skills",
    title: "Skills",
    iconPath: ExperienceIcon,
  },
  {
    path: "#qualification",
    title: "Qualification",
    iconPath: WorkIcon,
  },
  {
    path: "#contact",
    title: "Contact",
    iconPath: MessageIcon,
  },
];

export const FooterItems = [
  {
    path: "#about",
    title: "About",
    iconPath: AboutIcon,
  },
  {
    path: "#qualification",
    title: "Qualification",
    iconPath: WorkIcon,
  },
  {
    path: "#skills",
    title: "Technical skills",
    iconPath: ExperienceIcon,
  },
];

export const technologies = [
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Reactjs",
    icon: reactjs,
  },
  {
    name: "Vuejs",
    icon: vuejs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
export type ExperienceType = {
  projectName?: string;
  companyName?: string;
  icon?: any;
  date: string;
  description: React.ReactNode;
  role: string;
  teamSize: string;
  teches: string;
  responsibilities: React.ReactNode;
  accomplishments: React.ReactNode;
  images?: { imageData: StaticImageData; alt: string }[];
};

const _247_responsibilities = [
  "Contributed to building and maintaining a shared Design System using Next.js and shadcn/ui by developing reusable base components, shared layout patterns, and UI variants to standardize frontend implementation across HRM, TMS, and CRM domains.",
  "Developed complex HRM-focused management interfaces including organization charts using React Flow, tree selectors, draggable lists, workflow-related modules, and large-scale form-driven systems tailored for internal operational management.",
  "Participated in improving frontend architecture by transitioning legacy layer-based structures into approaches aligned with Atomic Design and Feature-Driven Architecture (FDA), improving project organization, component reusability, and long-term maintainability.",
  "Contributed to establishing frontend development conventions including folder structure, component organization, naming consistency, and reusable coding practices to improve code quality and team-wide development consistency.",
  "Collaborated closely with UX/UI designers to refine Figma designs, improve interaction flows, and transform design guidelines into responsive and scalable frontend components with strong focus on implementation feasibility and UI consistency.",
  "Implemented complex data-heavy interfaces with dynamic validation flows, filtering, pagination, advanced table interactions, and optimized API synchronization for large-scale business operations.",
  "Improved frontend performance and responsiveness through lazy loading, code splitting, memoization, render optimization, and temporary caching strategies for rarely updated master data, reducing unnecessary API requests and re-renders in complex management workflows.",
  "Worked cross-functionally with backend engineers, QA teams, and product stakeholders to clarify requirements, align technical solutions, and deliver scalable product features within release timelines.",
  "Designed real-time communication features using WebSocket for bidirectional updates and SSE for lightweight live data streaming scenarios.",
];

const _nexlab_responsibilities = [
  "Developed and maintained frontend features for large-scale ERP systems covering Admin, POS, and CRM platforms, focusing on scalable UI architecture and reusable business components for enterprise workflows.",
  "Built responsive and production-ready interfaces using Vue 2, Vue 3, and Quasar, integrating GraphQL APIs for complex data-driven management systems.",
  "Implemented reusable UI patterns, shared business components, and modular frontend structures to improve maintainability and development consistency across multiple application modules.",
  "Improved UI responsiveness and frontend performance through render optimization, efficient state handling, and component refactoring based on user behavior and customer feedback.",
  "Served as one of the key frontend contributors in evaluating the technical impact of PO requirements, identifying implementation constraints and system conflicts, and proposing frontend solutions aligned with existing architecture and business workflows.",
  "Participated in code reviews, technical discussions, and frontend implementation planning while contributing to maintainable development practices and reusable coding standards.",
  "Mentored other junior developers and interns through code reviews, task guidance, debugging support, and knowledge sharing for frontend development best practices.",
];

export const experiences: ExperienceType[] = [
  {
    // projectName: "HRM",
    projectName: "247 Technology",
    date: "03/02/2025 - now",
    description:
      "Shared design system, HRM modules, and data-heavy product UIs across multiple domains using Next.js and a component library aligned with design guidelines.",
    role: "Front-end Developer",
    teamSize: "Cross-functional product team",
    teches: "Next.js, TypeScript, shadcn/ui, Tailwind CSS",
    responsibilities: (
      <ul className="list-disc list-inside mt-2">
        {_247_responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    ),
    accomplishments:
      "Improved application performance through code splitting, lazy loading and memoization techniques. Designed real-time communication solutions using WebSocket for bidirectional data flow and SSE for lightweight server-to-client streaming scenarios.",
  },
  {
    projectName: "Warehouse Management System",
    companyName: "Freelance",
    date: "01/02/2024 - 31/12/2024",
    description:
      "A responsive web application for managing pharmacy warehouse operations and sales.",
    role: "Front-end Developer",
    teamSize: "2 members (1 Back-end, 1 Front-end)",
    teches: "React, Redux Toolkit, RTK Query, Ant Design, Tailwind CSS",
    responsibilities:
      "Analyzed requirements, wrote technical documentation, and implemented frontend features using React. Integrated REST APIs using Redux Toolkit and RTK Query.",
    accomplishments:
      "Delivered and deployed the first production version of the system.",
    // images: [
    //   { imageData: Login, alt: "Login" },
    //   { imageData: AccountManagement, alt: "Account management" },
    //   { imageData: CustomerManagement, alt: "Customer management" },
    //   { imageData: OrderManagment, alt: "Order management" },
    //   { imageData: CreateOrder, alt: "Create order" },
    //   { imageData: Dashboard, alt: "Dashboard" },
    //   { imageData: ImportRequest, alt: "Import request" },
    //   { imageData: ExportRequest, alt: "Export request" },
    //   { imageData: TransferRequest, alt: "Transfer request" },
    //   { imageData: ImportHistory, alt: "Import history" },
    //   { imageData: ImportExportHistory, alt: "Import/export hisstory" },
    //   { imageData: LotList, alt: "Lot list" },
    //   { imageData: InternalConfig, alt: "Internal configuẩtion" },
    //   { imageData: MasterData, alt: "Master data configuaration" },
    //   { imageData: SystemReport, alt: "System configuration" },
    //   { imageData: CommissionReport, alt: "Commission report" },
    //   { imageData: RevenueReport, alt: "Revenue report" },
    //   { imageData: SaleReport, alt: "Sales report" },
    //   { imageData: StockChangeReport, alt: "Stock change report" },
    // ],
  },
  {
    // projectName: "Enterprise ERP platforms",
    projectName: "Nexlab Technology",
    // icon: diva,
    date: "01/10/2022 - 30/06/2024",
    description:
      "Large-scale ERP systems covering Admin, POS, and CRM platforms with GraphQL-backed frontends.",
    role: "Front-end Developer",
    teamSize: "8 members includes 1 Back-end, 1 mobile, 2 QA and 4 Front-ends",
    teches: "Vue2, Vue 3, Quasar, Element Plus, Pinia, GraphQL",
    responsibilities: (
      <ul className="list-disc list-inside mt-2">
        {_nexlab_responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    ),
    accomplishments:
      "Delivered and iterated on production UIs across admin, POS, and CRM surfaces with a focus on performance and usability.",
  },
  //   {
  //     projectName: "DIVA ERP",
  //     companyName: "Nexlab Technology",
  //     icon: diva,
  //     date: "10/09/2022 - 15/06/2024",
  //     description:
  //       "An ERP system includes three websites (Admin, POS and CR1) and three apps (customer, staff and partner) The main functions include for human resource management, sales, finance, production planning and control, stock control and management reporting.",
  //     role: "Front-end Developer",
  //     teamSize: "8 members includes 1 Back-end, 1 mobile, 2 QA and 4 Front-ends",
  //     teches: "Go, Vue3, Quasar, Pinia",
  //     responsibilities:
  //       "Developing UI base on design with Vue3 and integrating API with GraphQL. Have 5 months for supporting internship, mainly review code, break and assign task. Improving performance and offering solutions to feedback from customer and user.",
  //     accomplishments:
  //       "Released 3 portal web for admin, pos and crm and 3 app for customer app, staff app and partner app. that is a system for manage staff, orders and statistic.",
  //   },
  //   {
  //     projectName: "WOW",
  //     companyName: "Nexlab Technology",
  //     icon: wow,
  //     date: "15/06/2022 - 10/9/2022",
  //     description:
  //       "This application is an system provides housekeeping services includes clean the house, clean the air conditioner, go to the market,... Through the customer app scheduling application and the Partner job acceptance application, customers and collaborators can proactively post and receive jobs directly on the application.",
  //     role: "Front-end Developer",
  //     teamSize: "5 members includes 1 Back-end, 1 mobile, 1 QA and 2 Front-ends",
  //     teches: "Go, Vue3, Quasar, Vuex",
  //     responsibilities:
  //       "Building UI and intergrate api with GraphQL, co-operating with web designer and BA to improve UI.",
  //     accomplishments:
  //       " Release 1 portal web for managing system and 2 apps, includes customer app and staff app which allow to customer booking partner with home cleaning services.",
  //   },
  //   {
  //     projectName: "DKEdu",
  //     companyName: "Nexlab Technology",
  //     icon: edu,
  //     date: "10/11/2021 - 15/06/2022",
  //     description:
  //       "This application provides a system managing technical courses for technicians and corresponding certifications. Beside, it includes the functions for managing account, branch, course, class,...",
  //     role: "Front-end Developer",
  //     teamSize: "8 members includes 2 Back-end, 2 mobile, 2 QA and 2 Front-ends",
  //     teches: "Go, Vue2, Element Plus, Vuex",
  //     responsibilities: "Building UI and intergrate api with GraphQL.",
  //     accomplishments:
  //       "An portal web that manage technians, courses, branch and classes.",
  //   },
  //   {
  //     projectName: "XCore",
  //     companyName: "Nexlab Technology",
  //     icon: xcore,
  //     date: "13/09/2021 - 10/12/2021",
  //     description: "a PWA using for managing system user, project and reporting.",
  //     role: "Front-end Developer",
  //     teamSize: "3 members includes 1 Back-end, 1 QA and 1 Front-ends",
  //     teches: "Go, Vue2, Quasar, Vuex",
  //     responsibilities:
  //       "Supporting to fix bugs and resolving request from customer and develop new features.",
  //     accomplishments:
  //       "complete 2 features that are the timekeeping and conversation includes send message and voice/video call by using Stringee.",
  //   },
];
