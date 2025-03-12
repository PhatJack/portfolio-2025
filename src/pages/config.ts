interface skillsProps {
  title: string;
  skills: string[];
}

export const skills: skillsProps[] = [
  {
    title: "Programming Languages",
    skills: [
      "simple-icons:html5",
      "simple-icons:css3",
      "simple-icons:javascript",
      "simple-icons:typescript",
      "simple-icons:php",
      "simple-icons:cplusplus",
    ],
  },
  {
    title: "Frameworks/Libraries",
    skills: [
      "simple-icons:react",
      "simple-icons:nextdotjs",
      "simple-icons:astro",
      "simple-icons:angular",
      "simple-icons:redux",
      "simple-icons:reactquery",
      "simple-icons:reacthookform",
    ],
  },
  {
    title: "Animation & UI Libraries",
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
    title: "Others",
    skills: [
      "simple-icons:git",
      "simple-icons:figma",
      "simple-icons:adobeillustrator",
      "simple-icons:firebase",
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
    timeLineTitle: "Intern Front-end Developer",
    timePeriod: "March 2025 - Present",
    listDocs: [
      {
        title: "Company",
        content: "One Medic",
      },
      {
        title: "Position",
        content: "Frontend Developer",
      },
      {
        title: "Location",
        content: "Onsite",
      },
    ],
    image: "/src/assets/company/onemedic.png",
    imageLink: "https://onemedic.vn/vi",
  },
  {
    timeLineTitle: "Intern Front-end Developer",
    timePeriod: "Dec 2024 - February 2025",
    listDocs: [
      {
        title: "Company",
        content: "Lagtuz Media",
      },
      {
        title: "Position",
        content: "Frontend Developer",
      },
      {
        title: "Location",
        content: "Hybrid",
      },
    ],
    image: "/src/assets/company/lagtuz.jpg",
    imageLink: "https://lagtuz.vn/",
  },
  {
    timeLineTitle: "Freelancer",
    timePeriod: "2024 - Present",
    listDocs: [
      {
        title: "Position",
        content: "Frontend Developer",
      },
      {
        title: "Location",
        content: "Remote",
      },
      {
        title: "Current Project",
        content: "Working on a client's gaming website",
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
    image: "/src/assets/sguLogo.png",
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
