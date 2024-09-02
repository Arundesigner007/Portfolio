import figmaIcon from "./assets/Resume/figma-icon.svg";
import photoshopIcon from "./assets/Resume/adobe-photoshop-icon.svg";
import illustratorIcon from "./assets/Resume/adobe-illustrator-icon.svg";

import GmailIcon from "./assets/Contact/gmail-icon.svg";
import LinkedInIcon from "./assets/Contact/linkedln-icon.svg";
import InstagramIcon from "./assets/Contact/instagram-icon.svg";

import healthBlendUxImg from "./assets/Projects/healthblend-ux-mobile.jpeg";
import healthBlendUiImg from "./assets/Projects/healthblend-ui-mobile.jpeg";
import coverMeImg from "./assets/Projects/coverme-web.jpeg";
import nestleImg from "./assets/Projects/nestle-graphic.jpeg";
import burgerImg from "./assets/Projects/burger-graphic.jpeg";
import shoeImg from "./assets/Projects/shoe-graphic.jpeg";
export const EducationData = [
  {
    id: 1,
    title: "UX/UI Design",
    school: "School of techies ",
    period: "Sep 2023 - April 2024 ",
  },
  {
    id: 2,
    title: "BCA",
    school: "Guru Nanak College",
    period: "2021 - 2024",
  },
  {
    id: 3,
    title: "HSC",
    school: "Government higher sec sch, Anakaputhur, Chennai-70",
    period: "2019 - 2021",
  },
];

export const ToolsData = [
  {
    id: 1,
    title: "Figma",
    iconUrl: figmaIcon.src,
    score: 8,
  },
  {
    id: 2,
    title: "Adobe Photoshop",
    iconUrl: photoshopIcon.src,
    score: 5,
  },
  {
    id: 3,
    title: "Adobe Illustrator",
    iconUrl: illustratorIcon.src,
    score: 5,
  },
];

export const SkillsData = [
  "User Research",
  "Persona Creation",
  "Interaction Design",
  "Wireframing",
  "Create User Flow",
  "Build Information Architecture",
  "Prototyping",
  "Usability Testing",
  "UI Design",
  "UX Design",
];

export const CertificationsData = [
  ["UX/UI Design"],
  ["Tally", "(Hands on training)"],
  ["ChatGPT With AI Hacks And Agile Project Development ", "(WorkShop)"],
];

export const MediaData = [
  {
    id: 1,
    platform: "Instagram",
    link: "https://www.instagram.com/arun__design",
    displayName: "arun__design",
    iconURL: InstagramIcon.src,
  },
  {
    id: 2,
    platform: "Gmail",
    link: "arun.designer04@gmail.com",
    displayName: "arun.designer04@gmail.com",
    iconURL: GmailIcon.src,
  },
  {
    id: 3,
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/arun-j-119114291",
    displayName: "Arun J",
    iconURL: LinkedInIcon.src,
  },
];

export const ProjectTypes = ["Mobile", "Web", "Graphic"];

export const ProjectsData = [
  {
    id: 1,
    name: "Health Blend",
    description: "UX Case Study",
    imgUrl: healthBlendUxImg.src,
    type: "Mobile",
    link: "https://www.behance.net/gallery/195558349/UX-case-study-of-Health-Blend",
  },
  {
    id: 2,
    name: "Health Blend",
    description: "UI Case Study",
    imgUrl: healthBlendUiImg.src,
    type: "Mobile",
    link: "https://www.behance.net/gallery/195603557/UI-case-study-of-Health-blend",
  },
  {
    id: 3,
    name: "Cover Me",
    description: "Landing Page",
    imgUrl: coverMeImg.src,
    type: "Web",
    link: "https://www.behance.net/gallery/203497395/COVER-ME-Landing-Page",
  },
  {
    id: 4,
    name: "Nestle Branding",
    description: "Advertising Design",
    imgUrl: nestleImg.src,
    type: "Graphic",
    link: "https://www.behance.net/gallery/204434331/Poster-Design",
  },
  {
    id: 5,
    name: "Burger Advertisement",
    description: "Advertising Design",
    imgUrl: burgerImg.src,
    type: "Graphic",
    link: "https://www.behance.net/gallery/206561821/Burger-Advertising-poster",
  },
  {
    id: 5,
    name: "Shoe Advertisement",
    description: "Advertising Design",
    imgUrl: shoeImg.src,
    type: "Graphic",
    link: "https://www.behance.net/gallery/206742507/Shoe-Ads-poster",
  },
];
