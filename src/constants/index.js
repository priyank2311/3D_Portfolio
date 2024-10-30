import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nextjs,
  Bootstrap,
  git,
  figma,
  docker,
  amazon,
  strees,
  custom,
  threejs,
  healthJay,
  osyte, 
  untrodden, 
  yt_clone,
  copartner
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Bootstrap",
    icon: Bootstrap,
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
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr.Front-End Developer",
    company_name: "Copartner",
    icon: copartner,
    iconBg: "#383E56",
    date: "Mar 2024 - Present",
    points: [
      "Developed a real-time chat application similar to WhatsApp Web using SignalR (Microsoft library) for seamless two-way communication. Implemented a subscription-based chat feature that tracks user chat duration, automatically moving expired chats to a history section. This solution improved user engagement and streamlined chat management based on subscription plans.",
      "Established and configured repository environments for User Page, Admin Dashboard Page, and Super Admin Dashboard Page from scratch. Developed responsive designs across all repositories, optimizing usability on all devices.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "HealthJay",
    icon: healthJay,
    iconBg: "#383E56",
    date: "Aug 2021 - Mar 2024",
    points: [
      "Designed and developed a dynamic chat interface, akin to WhatsApp, enabling users to exchange messages, images, and documents seamlessly.",
      "Developed dynamic survey form enabling users to select questions from dropdown and submit answers. Enhanced user engagement and data collection.",
      "Designed and implemented customizable UI with theme toggling, empowering users to personalize their experience through dynamic theme selection.",
      "Developed responsive UIs using ReactJS, Typescript, and Bootstrap. Managed state with Redux, enhanced aesthetics with Material UI."
    ],
  },
  {
    title: "Jr. Front-End Developer",
    company_name: "OSYTE Investment Technology",
    icon: osyte,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Create visual elements like buttons and scrolling panels.",
    ],
  },
  {
    title: "Web Developer Internship",
    company_name: "Untrodden Labs",
    icon: untrodden,
    iconBg: "#383E56",
    date: "Dec 2020 - Feb 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "I developed a comprehensive Amazon e-commerce clone using ReactJS, meticulously replicating the user interface and incorporating all essential features available on the original platform.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/priyank2311/amazon-clone",
  },
  {
    name: "Customize T-Shirt",
    description:
      "Web application that provide User to Customize there own T-Shirts. It's a 3D web page, where User can changed the Color, Upload there own Logo or even better they can customize by asking AI to generate the Logo or the Texture",
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "pink-text-gradient",
      },
    ],
    image: custom,
    source_code_link: "https://github.com/priyank2311/customize_ai_tshort",
  },
  {
    name: "YouTube Clone",
    description:
      "Designed and developed a feature-rich YouTube clone using ReactJS, Material-UI, and integrated RapidAPI to replicate the functionality of the popular video-sharing platform.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: yt_clone,
    source_code_link: "https://github.com/priyank2311/youtube_clone",
  },
];

export { services, technologies, experiences, projects };
