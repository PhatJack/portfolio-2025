import onemedicImage from "../assets/company/onemedic.png";
import lagtuzImage from "../assets/company/lagtuz.jpg";
import sguLogoImage from "../assets/sguLogo.png";

interface skillsProps {
  title: string;
  skills: string[];
}

type SkillCategory = "Programming Languages" | "Frameworks" | "Database" | "UI" | "Tools";

type SkillGroup = {
  title: SkillCategory;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      "simple-icons:html5",
      "simple-icons:css3",
      "simple-icons:javascript",
      "simple-icons:typescript",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "simple-icons:react",
      "simple-icons:nextdotjs",
      "simple-icons:astro",
      "simple-icons:angular",
      "simple-icons:redux",
      "simple-icons:reactquery",
      "simple-icons:reacthookform",
      "simple-icons:nestjs",
      "simple-icons:prisma",
    ],
  },
  {
    title: "Database",
    skills: ["simple-icons:mysql", "simple-icons:postgresql"],
  },
  {
    title: "UI",
    skills: [
      "simple-icons:framer",
      "simple-icons:mui",
      "simple-icons:tailwindcss",
      "simple-icons:shadcnui",
      "simple-icons:antdesign",
      "simple-icons:bootstrap",
      "simple-icons:sass",
    ],
  },
  {
    title: "Tools",
    skills: [
      "simple-icons:git",
      "simple-icons:figma",
      "simple-icons:docker",
      "simple-icons:postman",
      "simple-icons:github",
    ],
  },
];

interface hobbiesProps {
  title: string;
}

const hobbies: hobbiesProps[] = [
  { title: "Reading" },
  { title: "Traveling" },
  { title: "Playing games" },
  { title: "Watching movies" },
  { title: "Listening to music" },
  { title: "Learning new things" },
  { title: "Making friends" },
  { title: "Helping others" },
  { title: "Making animations" },
  { title: "Making websites" },
];

interface archiveDataProps {
  timeLineTitle: string;
  timePeriod: string;
  listDocs: { title: string; content: string }[];
  image?: string;
  altText?: string;
  imageLink?: string;
}

export const archiveData: archiveDataProps[] = [
  {
    timeLineTitle: "Full-stack Developer",
    timePeriod: "March 2025 - April 2026",
    listDocs: [
      {
        title: "Company",
        content: "One Medic JSC",
      },
      {
        title: "Position",
        content: "Full-stack Developer",
      },
      {
        title: "Location",
        content: "Ho Chi Minh City",
      },
      {
        title: "Highlights",
        content:
          "Built UI from Figma with React and CoreUI, synced data with React Query, handled client-side CRUD against PostgreSQL-backed APIs, improved core features and performance, and refined components from design feedback.",
      },
    ],
    image: onemedicImage.src,
    imageLink: "https://onemedic.vn/vi",
  },
  {
    timeLineTitle: "Front-end Developer",
    timePeriod: "August 2024 - February 2025",
    listDocs: [
      {
        title: "Company",
        content: "Lagtuz Media",
      },
      {
        title: "Position",
        content: "Front-end Developer",
      },
      {
        title: "Location",
        content: "Ho Chi Minh City",
      },
      {
        title: "Highlights",
        content:
          "Worked with designers to improve user experience, implemented responsive enhancements, and maintained front-end functionality for websites.",
      },
    ],
    image: lagtuzImage.src,
    imageLink: "https://lagtuz.vn/",
  },
  {
    timeLineTitle: "Front-end Developer",
    timePeriod: "July 2024 - July 2025",
    listDocs: [
      {
        title: "Company",
        content: "Freelancer",
      },
      {
        title: "Location",
        content: "Ho Chi Minh City",
      },
      {
        title: "Highlights",
        content:
          "Delivered front-end work for client projects and iterated on UI details as needed.",
      },
    ],
  },
  {
    timeLineTitle: "School",
    timePeriod: "2021 - 2026",
    listDocs: [
      {
        title: "Name",
        content: "Sai Gon University",
      },
      {
        title: "Major",
        content: "Information Technology",
      },
      {
        title: "Degree",
        content: "Bachelor",
      },
    ],
    image: sguLogoImage.src,
    altText: "Sai Gon University",
    imageLink: "https://www.sgu.edu.vn/",
  },
];

interface projectDataProps {
  title: string;
  date: string;
  members: number;
  description: string;
  tags: string[];
  slug: string;
  altText?: string;
  image?: string;
}

export const projectData: projectDataProps[] = [
  {
    title: "Ztudy - Stay Focused",
    date: "2025-04-27",
    members: 6,
    description:
      "Ztudy is a collaborative study platform with video calls, chat, screen sharing, and focus tools like mic muting—perfect for solo or group learning.",
    tags: ["React", "NextJS", "TailwindCSS", "Python", "React-query", "MySQL", "AWS"],
    slug: "",
  },
  {
    title: "Portfolio",
    date: "2024-01-11",
    members: 1,
    description: "My personal portfolio website",
    tags: ["AstroJS", "TypeScript", "TailwindCSS"],
    slug: "",
  },
  {
    title: "Zity - Apartment Management",
    date: "2024-09-24",
    members: 6,
    description: "An apartment management system",
    tags: ["React", "TailwindCSS", "Firebase", "Redux", "ASP.NET", "MySQL"],
    slug: "",
  },
  {
    title: "Zitylot - Car Parking Management",
    date: "2024-09-13",
    members: 4,
    description: "An car parking management system",
    tags: ["C#", "MySQL", "Winform"],
    slug: "",
  },
  {
    title: "Tu tiên thăng cấp",
    date: "2024-07-06",
    members: 4,
    description:
      "A game of cultivation, leveling up, upgrading characters, gathering resources, battling, and earning rewards. Join guilds, events, and overcome challenges.",
    tags: ["C#", "MySQL", "Winform"],
    slug: "",
  },
  {
    title: "Pychat",
    date: "2024-01-20",
    members: 4,
    description: "A chat application using Python and Socketio",
    tags: ["React", "TailwindCSS", "Socketio", "Python", "Flask"],
    slug: "",
  },
  {
    title: "Pomodoro",
    date: "2023-08-06",
    members: 1,
    description: "A simple pomodoro timer with many cool features",
    tags: ["React", "TailwindCSS"],
    slug: "",
  },
  {
    title: "Flower Delivery",
    date: "2023-07-27",
    members: 1,
    description: "A flower delivery website",
    tags: ["React", "TailwindCSS"],
    slug: "",
  },
];
