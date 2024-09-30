import HomeIcon from "@image/home.json";
import AboutIcon from "@image/about.json";
import WorkIcon from "@image/works.json";
import ExperienceIcon from "@image/experience.json";
import MessageIcon from "@image/message.json";
import {
  css,
  diva,
  edu,
  figma,
  git,
  html,
  javascript,
  nextjs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  vuejs,
  wow,
  xcore,
} from "@image/index";
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
    path: "#experience",
    title: "Experience",
    iconPath: WorkIcon,
  },
  {
    path: "#technical",
    title: "Technical skills",
    iconPath: ExperienceIcon,
  },
];

export const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Vuejs",
    icon: vuejs,
  },
  {
    name: "Reactjs",
    icon: reactjs,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
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
  projectName: string;
  companyName?: string;
  icon: any;
  date: string;
  description: string;
  role: string;
  teamSize: string;
  teches: string;
  responsibilities: string;
  accomplishments: string;
};
export const experiences: ExperienceType[] = [
  {
    projectName: "Warehouse management",
    companyName: "Freelance",
    icon: xcore,
    date: "19/02/2024 - now",
    description:
      "A responsive web that help to manage a pharmacy warehouse and sales counter.",
    role: "Front-end Developer",
    teamSize: "2 members (1 Back-end, 1 Front-end",
    teches: ".NET Core, ReactJs, Redux Toolkit, RTK Query, Ant UI, Tailwin",
    responsibilities:
      "Analyzed requirements, wrote documentation, built front-end source code, handled UI, and integrated APIs.",
    accomplishments:
      " Deployed version 1 of a responsive web application for managing a medicine warehouse and sales counter.",
  },
  {
    projectName: "DIVA ERP",
    companyName: "Nexlab Technology",
    icon: diva,
    date: "10/09/2022 - 15/06/2024",
    description:
      "An ERP system includes three websites (Admin, POS and CR1) and three apps (customer, staff and partner) The main functions include for human resource management, sales, finance, production planning and control, stock control and management reporting.",
    role: "Front-end Developer",
    teamSize: "8 members includes 1 Back-end, 1 mobile, 2 QA and 4 Front-ends",
    teches: "Go, Vue3, Quasar, Pinia",
    responsibilities:
      "Developing UI base on design with Vue3 and integrating API with GraphQL. Have 5 months for supporting internship, mainly review code, break and assign task. Improving performance and offering solutions to feedback from customer and user.",
    accomplishments:
      "Released 3 portal web for admin, pos and crm and 3 app for customer app, staff app and partner app. that is a system for manage staff, orders and statistic.",
  },
  {
    projectName: "WOW",
    companyName: "Nexlab Technology",
    icon: wow,
    date: "15/06/2022 - 10/9/2022",
    description:
      "This application is an system provides housekeeping services includes clean the house, clean the air conditioner, go to the market,... Through the customer app scheduling application and the Partner job acceptance application, customers and collaborators can proactively post and receive jobs directly on the application.",
    role: "Front-end Developer",
    teamSize: "5 members includes 1 Back-end, 1 mobile, 1 QA and 2 Front-ends",
    teches: "Go, Vue3, Quasar, Vuex",
    responsibilities:
      "Building UI and intergrate api with GraphQL, co-operating with web designer and BA to improve UI.",
    accomplishments:
      " Release 1 portal web for managing system and 2 apps, includes customer app and staff app which allow to customer booking partner with home cleaning services.",
  },
  {
    projectName: "DKEdu",
    companyName: "Nexlab Technology",
    icon: edu,
    date: "10/11/2021 - 15/06/2022",
    description:
      "This application provides a system managing technical courses for technicians and corresponding certifications. Beside, it includes the functions for managing account, branch, course, class,...",
    role: "Front-end Developer",
    teamSize: "8 members includes 2 Back-end, 2 mobile, 2 QA and 2 Front-ends",
    teches: "Go, Vue2, Element Plus, Vuex",
    responsibilities: "Building UI and intergrate api with GraphQL.",
    accomplishments:
      "An portal web that manage technians, courses, branch and classes.",
  },
  {
    projectName: "XCore",
    companyName: "Nexlab Technology",
    icon: xcore,
    date: "13/09/2021 - 10/12/2021",
    description: "a PWA using for managing system user, project and reporting.",
    role: "Front-end Developer",
    teamSize: "3 members includes 1 Back-end, 1 QA and 1 Front-ends",
    teches: "Go, Vue2, Quasar, Vuex",
    responsibilities:
      "Supporting to fix bugs and resolving request from customer and develop new features.",
    accomplishments:
      "complete 2 features that are the timekeeping and conversation includes send message and voice/video call by using Stringee.",
  },
];
