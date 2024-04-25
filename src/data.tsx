import { FiGithub, FiFacebook, FiCodepen } from "react-icons/fi";
import bloggerumDesktop from "./assets/bloggerum-desktop.png";
import bloggerumTablet from "./assets/bloggerum-tablet.png";
import questionLibDesktop from "./assets/question-lib-desktop.png";
import questionLibTablet from "./assets/question-lib-tablet.png";
import duyenkimDesktop from "./assets/duyenkim-desktop.png";
import duyenkimTablet from "./assets/duyenkim-tablet.png";
import { WorkItemProps } from "./types";

export const navItems = [
  {
    hash: "#home",
    content: "Home",
  },
  {
    hash: "#works",
    content: "Works",
  },
  {
    hash: "#about",
    content: "About",
  },
  {
    hash: "#contact",
    content: "Contact",
  },
];

export const projects: WorkItemProps[] = [
  {
    id: 1,
    title: "Bloggerum | Forum for writers",
    description:
      "A publishing platform where users can create account and share posts to the world. Featuring session-based authentication, image upload, MongoDB aggregations...",
    images: {
      desktop: bloggerumDesktop,
      tablet: bloggerumTablet,
    },
    tags: ["Nextjs", "Typescript", "ExpressJS", "MongoDB", "Authentication"],
    liveSite: "https://bloggerum.xuanhung.dev/",
    sourceCode: "https://github.com/xuanhung1509/bloggerum",
  },
  {
    id: 2,
    title: "Component library for online learning platforms",
    description:
      "My previous work at an education company. Featuring complex animation, drag and drop, and thorough documentation with Storybook and Typescript.",
    images: {
      desktop: questionLibDesktop,
      tablet: questionLibTablet,
    },
    tags: ["React", "Typescript", "Storybook", "FramerMotion"],
    liveSite: "https://question-library.netlify.app/",
    sourceCode: null,
  },
  {
    id: 3,
    title: "Duyenkim | Beauty & Haircare E-Commerce website",
    description:
      "A website featuring end-user store and admin dashboard for my client based in Hanoi.",
    images: {
      desktop: duyenkimDesktop,
      tablet: duyenkimTablet,
    },
    tags: ["NextJS", "Typescript", "Sanity CMS"],
    liveSite: "https://www.duyenkim.com/",
    sourceCode: null,
  },
];

export const socialMedia = [
  {
    id: "github",
    icon: <FiGithub size={20} />,
    link: "https://github.com/xuanhung1509",
  },
  {
    id: "facebook",
    icon: <FiFacebook size={20} />,
    link: "https://www.facebook.com/vuxuanhung1509",
  },
  {
    id: "codepen",
    icon: <FiCodepen size={20} />,
    link: "https://codepen.io/xuanhung1509",
  },
];
