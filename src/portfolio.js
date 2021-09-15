import emoji from "react-easy-emoji";

import Guvi from "./assets/img/icons/common/Guvi.png";
import Tredence from "./assets/img/icons/common/Tredence.jpg";
import Wipro from "./assets/img/icons/common/Wipro.png";

export const greetings = {
  name: "Rupam Sinha",
  title: "Hi all, I'm Rupam",
  description:
    "A passionate Full Stack Developer and Azure certified Cloud Enthusiastic having a 2+ years rich experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries/frameworks and deploying/maintaining them on Cloud.",
  resumeLink:
    "https://drive.google.com/file/d/1YZY4-HrabkB0KuQrwLohCk18qCY0kKXZ/view?usp=sharing",
};

export const openSource = {
  githubUserName: "rupam0912",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/rupam.sinha.311",
  instagram: "https://www.instagram.com/rudiscovery",
  twitter: "https://twitter.com/rupam0912",
  github: "https://github.com/rupam0912",
  linkedin: "https://www.linkedin.com/in/rupam-sinha-7b8587160/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop interactive & progressive SPA/Normal Web Application"),
    emoji("⚡ Building highly available, scalable backend architecture "),
    emoji("⚡ Integration of third party services such as Azure/Heroku/AWS"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "vscode-icons:folder-type-linux-opened",
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "vscode-icons:file-type-azure",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Backend Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Frontend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
  {
    Stack: "Azure",
    progressPercentage: "40",
  },
];

export const educationInfo = [
  {
    schoolName: "Academy of Technology",
    subHeader: "B.Tech in Computer Science & Engineering",
    duration: "April 2015 - June 2019",
    desc: "Kolkata, West Bengal",
    descBullets: ["DGPA: 8.88", "Winner of AI Hackathon"],
  },
  {
    schoolName: "Guvi Geeks Network, IIT Madras Research Park",
    subHeader: "Full Stack Development",
    duration: "May 2020 - October 2020",
    desc: "Chennai, Tamil Nadu",
    descBullets: [
      "Successfully submitted final capstone project",
      "Earned A+ Marks",
    ],
  },
  {
    schoolName: "Ranaghat P.C Boys High School",
    subHeader: "Higher Secondary in Science",
    duration: "January 2013 - May 2015",
    desc: "Ranaghat, West Bengal",
    descBullets: ["12th Marks: 88.8%"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Tredence Analytics",
    companylogo: Tredence,
    date: "July 2021 – Present",
    desc: "Part of Tredence Studio team - an analytics platform",
    descBullets: [
      "Implemented features for Odyssey - a pureplay SaaS product for Product Management",
      "Getting trained in Azure",
    ],
  },
  {
    role: "Project Engineer",
    company: "Wipro",
    companylogo: Wipro,
    date: "June 2019 – July 2021",
    desc: "Part of Wipro's Infor Practice Team",
    descBullets: [
      "Served Georgia-Pacific (Pulp manufacturer under Koch Industries) as a Form Developer",
      "Implemented 20+ business forms using Infor M3, IDM, JavaScript & XML",
      "Created OAuth 2.0 flow between Infor IDM & Client's homegrown ERP system",
      "Part of Integration team & helped the team to develop a CI/CD pipeline using Azure DevOps",
      "RFP study using Infor Coleman AI for Bristol Water - Pump Anomaly Detection using Machine Learning",
    ],
  },
  {
    role: "Trainee",
    company: "Guvi",
    companylogo: Guvi,
    date: "May 2020 – October 2020",
    desc: "Full Stack Development Course",
  },
];

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "https://example.com",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/1hanzla100",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolors sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/1hanzla100",
    link: "https://example.com",
  },
];

export const feedbacks = [
  {
    name: "John Doe",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "John Doe",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
