import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  da,
  research,
  consultant,
  sde,
  kreeda,
  ss_academy,
  hv,
  java,
  pbi,
  python,
  excel,
  ms_office,
  website,
  web,
  pwc_excel,
  pwc_visual,
  google_da,
  corporate_finance,
  quantative,
  ml,
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
    title: "Data Analyst",
    icon: da,
    skill: "Python, Excel, MS-Office, SQL, Power BI",
  },
  {
    title: "Researcher",
    icon: research,
    skill: "R, Python, Statistical Analysis, Visualizations, MS-Office",
  },
  {
    title: "Consultant",
    icon: consultant,
    skill:
      "Financial and Business Analysis, Powerpoint, Advance Excel, Problem Solving",
  },
  {
    title: "Software Developer",
    icon: sde,
    skill:
      "Python, Java, C#,C++, Web Development (Full Stack), Machine Learning",
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
    name: "Power BI",
    icon: pbi,
  },
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
  {
    name: "MS Office",
    icon: ms_office,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Excel",
    icon: excel,
  },
];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "Kreeda Entertainment Technologies",
    icon: kreeda,
    subtitle: "Game Development Company",
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Led a 3-member team, driving impactful change in the gaming industry",
      "Conducted thorough gaming industry research for informed decision-making",
      "Developed a comprehensive Game Design Document, guiding our studio's vision",
      "Committed to excellence, innovation, and strategic growth in the dynamic gaming landscape",
    ],
  },
  {
    title: "Strategy and Business Analyst",
    company_name: "Himaalayaan Ved",
    icon: hv,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Analyzed FMCG sector, recommending 5+ SKU expansions",
      "Optimized supply chain, reducing costs by 8% and procurement time by 5 days",
      "Explored high-priced product market, refining marketing strategies for effective positioning",
      "Drove 6% revenue growth through targeted product diversification and market penetration",
    ],
  },
  {
    title: "Founder",
    company_name: "SS-Academy",
    icon: ss_academy,
    iconBg: "#383E56",
    date: "Feb 2022- Oct 2022",
    points: [
      "Founded SS-Academy (Tuition Centre), realizing Rs. 80,000 revenue in 8 months, affirming financial sustainability",
      "Cultivated essential management and communication skills, pivotal to SS-Academy's triumph and my professional evolution",
      "Revolutionized teaching methods, fostering a 30% surge in student achievements and satisfaction",
    ],
  },
];

const education = [
  {
    testimonial:
      "Bachelor of Management Studies",
    name: "Shaheed Sukhdev College of Business Studies, DU",
    designation: "CGPA :",
    company: "8.73 (till 2nd Sem)",
    timeline: "Nov 2022 - Present"
  },
  {
    testimonial:
      "ISC (Commerce) | ICSE (Science)",
    name: "St.Georges's College, Agra",
    designation: "Percentage :",
    company: "95.4% | 94%",
    timeline: "2021 | 2019"
  },
  {
    testimonial:
      "CA Foundation",
    name: "ICAI",
    designation: "Marks :",
    company: "302/400 (Pass with distinction)",
    timeline: "Nov 2022 - Present"
  },
];

const projects = [
  {
    name: "Financial Models",
    description:
      "Professional-grade: 30+ customizable Excel financial models, spanning simple interest to complex business scenarios – tailored for seamless integration into any company's financial strategy.",
    tags: [
      {
        name: "Finance",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Financial Modelling",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "My Portfolio Website",
    description:
      "Constructed my portfolio website using React for dynamic user interfaces, Three.js for immersive 3D graphics, and Tailwind for elegant styling. Employed a scalable and meticulously organized codebase, ensuring optimal performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/",
  },
  {
    name: "SwiftStay",
    description:
      "A hotel booking platform integrating advanced search algorithms, a robust CMS, and secure payment features. Prioritizing user security with fortified authorization.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "cors",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "ThoughtFlow Hub",
    description:
      "An advance SaaS product, built with NextJs, React, SSR, GraphQL, and Tailwind CSS, this project redefines web development with cutting-edge technologies, ensuring optimal performance and innovative coding solutions.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "ThoughtFlow Hub",
    description:
      "An advance SaaS product, built with NextJs, React, SSR, GraphQL, and Tailwind CSS, this project redefines web development with cutting-edge technologies, ensuring optimal performance and innovative coding solutions.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "ThoughtFlow Hub",
    description:
      "An advance SaaS product, built with NextJs, React, SSR, GraphQL, and Tailwind CSS, this project redefines web development with cutting-edge technologies, ensuring optimal performance and innovative coding solutions.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

const certificates = [
  {
    name: "Google Data Analyst Specialization",
    description:
      "Professional-grade: 30+ customizable Excel financial models, spanning simple interest to complex business scenarios – tailored for seamless integration into any company's financial strategy.",
    tags: [
      {
        name: "Finance",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Financial Modelling",
        color: "pink-text-gradient",
      },
    ],
    image: google_da,
    source_code_link: "https://github.com/",
  },
  {
    name: "PWC Advance Excel",
    description:
      "Constructed my portfolio website using React for dynamic user interfaces, Three.js for immersive 3D graphics, and Tailwind for elegant styling. Employed a scalable and meticulously organized codebase, ensuring optimal performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
    ],
    image: pwc_excel,
    source_code_link: "https://github.com/",
  },
  {
    name: "PWC Data Visualization",
    description:
      "A hotel booking platform integrating advanced search algorithms, a robust CMS, and secure payment features. Prioritizing user security with fortified authorization.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "cors",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: pwc_visual,
    source_code_link: "https://github.com/",
  },
  {
    name: "Introduction to corporate finance",
    description:
      "Professional-grade: 30+ customizable Excel financial models, spanning simple interest to complex business scenarios – tailored for seamless integration into any company's financial strategy.",
    tags: [
      {
        name: "Finance",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Financial Modelling",
        color: "pink-text-gradient",
      },
    ],
    image: corporate_finance,
    source_code_link: "https://github.com/",
  },
  {
    name: "Quantative Modelling",
    description:
      "Constructed my portfolio website using React for dynamic user interfaces, Three.js for immersive 3D graphics, and Tailwind for elegant styling. Employed a scalable and meticulously organized codebase, ensuring optimal performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
    ],
    image: quantative,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mathematics for Machine Learning",
    description:
      "A hotel booking platform integrating advanced search algorithms, a robust CMS, and secure payment features. Prioritizing user security with fortified authorization.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "cors",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://github.com/",
  },
];
export {
  services,
  technologies,
  experiences,
  education,
  projects,
  certificates,
};
