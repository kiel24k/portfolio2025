import { Info } from "@mui/icons-material";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLaravel,
  FaVuejs,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import { SiAxios, SiPrimevue, SiMysql } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiOutlineJavaScript } from "react-icons/ai";

export const frontendStack = [
  "Html",
  "Css",
  "Bootstrap",
  "Tailwind Css",
  "Javascript",
  "Vue.js",
  "React.js",
  "MUI",
  "Vite",
];

export const backendStack = [
  "PHP",
  "Laravel",
  "SQL",
  "MySQL",
  "REST Api",
  "Api",
];

export const devTools = [
  "Linux",
  "Docker",
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
];

export const socialLinks = [
  {
    id: 1,
    name: "linkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kiel-bermudez-23bbb62a1/",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/kiel24k",
  },
  {
    id: 3,
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/kiel.alarconbermudez/",
  },
];

export const otherDetails = {
  id: 1,
  email: "kielbermudez200104@gmail.com",
  contact: "09193471522",
  nationality: "Filipino",
};

export const projects = [
  {
    id: 1,
    title: "FCIE-Inv",
    description: "Inventory management of FCIE",
    link: "https://github.com/kiel24k/FCIE-abmould-",
    linkName: "FCIE-abmould",
    tools: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaBootstrap />,
      <FaVuejs />,
      <SiPrimevue />,
      <FaLaravel />,
      <SiAxios />,
      <SiMysql />,
    ],
  },
  {
    id: 2,
    title: "13thVapourLounge",
    link: "https://github.com/kiel24k/13thvapourlounge2025",
    description: "Vapeshop at Trece Martires Cavite",
    linkName: "13thvapourlounge",
    tools: [
      <FaHtml5 />,
      <FaCss3 />,
      <BiLogoTailwindCss />,
      <FaReact />,
      <FaLaravel />,
      <SiAxios />,
      <SiMysql />,
    ],
  },
  {
    id: 3,
    title: "Microservice all around",
    description: "A project that focus in Architectural pattern",
    link: "https://github.com/kiel24k/Microservice-BE-FE-",
    linkName: "Microservice-BE-FE",
    tools: [
      <FaDocker />,
      <FaLinux />,
      <FaReact />,
      <FaLaravel />,
      <BiLogoTailwindCss />,
      <SiMysql />,
    ],
  },
  {
    id: 4,
    title: "ChatApp",
    description: "Realtime Chat Applciation - websocket practices",
    link: "https://github.com/kiel24k/Microservice-BE-FE-",
    linkName: "chatapplication",
    tools: [<FaVuejs />, <FaLaravel />, <FaBootstrap />, <SiMysql />],
  },
  {
    id: 5,
    title: "iPhone Clone",
    description: "Cloned Apple Store Design",
    link: "https://github.com/kiel24k/iphone-clone-2023-2024",
    linkName: "iphone-clone-2023-2024",
    tools: [<FaHtml5 />, <FaCss3 />, <FaBootstrap />, <AiOutlineJavaScript />],
  },
  {
    id: 6,
    title: "gaming-credits",
    description: "Helps player to pick or buy credits for available games",
    link: "https://github.com/kiel24k/e-credits-Laravel10",
    linkName: "e-credits",
    tools: [<FaHtml5 />, <FaCss3 />, <FaLaravel />, <SiMysql />],
  },
];
