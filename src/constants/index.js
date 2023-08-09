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
  untrodden
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
    title: "Front-End Developer",
    company_name: "HealthJay",
    icon: healthJay,
    iconBg: "#383E56",
    date: "Aug 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "Web application that look similar to Amazon. Amazon website with full E-Commerce functionality, Login Page, Products Page, Cart and Checkout Page. Used ReactJs & Firebase as backend database server",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/priyank2311/amazon-clone",
  },
  {
    name: "Stress Relief",
    description:
      "Web application that enables users Stress by playing this game. I used simple Vanilla Javascript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: strees,
    source_code_link: "https://github.com/priyank2311/AreyouAngry",
  },
  {
    name: "Recipe Book",
    description:
      "Web application that provide User to Customize there own T-Shirts. It's a 3D web page, where User can changed the Color, Upload there own Logo or even better they can customize by asking AI to generate the Logo or the Texture",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: custom,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
