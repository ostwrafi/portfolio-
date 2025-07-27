import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import kitty from "../assets/kitty.png";
import vw from "../assets/vw.png";
import dice from "../assets/company/dice.png";
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
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Authentication Specialist",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Founder & CEO",
    company_name: "Epic Engine Corporation",
    icon: dice,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Vintage world",
    icon: vw,
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Founder & CEO",
    company_name: "NODEX",
    icon: kitty, // Replace with an appropriate icon for a startup
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Founded and lead NODEX, a mini-startup focused on innovative software solutions.",
      "Developed a PC Cleaner application using Python and Tkinter.",
      "Created a Python bot for Discord to automate server tasks and enhance user interaction.",
      "Published a Python package on PyPI named 'muradian-strCalc' to simplify string calculations.",
      "Collaborated with a dedicated team to bring ideas to life and ensure project success.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Token Grabber",
    description:
      "This project is designed for educational purposes only to demonstrate how Discord tokens can be compromised if users are not cautious with third-party links, tools, or untrusted applications.",
    tags: [
      {
        name: "C-Sharp",
        color: "blue-text-gradient",
      },
      {
        name: "malware",
        color: "green-text-gradient",
      },
      {
        name: "discord",
        color: "pink-text-gradient",
      },
      {
        name: "reverse engineering",
        color: "green-text-gradient",
      },
      
    
    ],
    image: carrent,
    source_code_link: "https://github.com/ostwrafi/Token-Grabber",
  },
  {
    name: "UserDetabase Using Firebase ",
    description:
      "A powerful web-based Admin Dashboard built with Firebase Realtime Database. Designed to manage users, HWIDs, bans, and application controls (like version, status, and download link) — similar to KeyAuth but completely custom and flexible",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ostwrafi/UserDetabase-Using-Firebase",
  },
  {
    name: "DM-Spmmer-Bot",
    description:
      "A simple Discord bot (Python + Go) designed to send bulk direct messages (DMs) — for testing, automation, or notifications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "discord",
        color: "green-text-gradient",
      },
      {
        name: "go",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/ostwrafi/DM-Spmmer-Bot",
  },
];

export { services, technologies, experiences, testimonials, projects };
