import { FiGithub, FiFacebook, FiCodepen } from 'react-icons/fi';
import commentDesktop from './assets/comment-desktop.jpg';
import commentTablet from './assets/comment-tablet.jpg';
import todoDesktop from './assets/todo-desktop.jpg';
import todoTablet from './assets/todo-tablet.jpg';
import sneakersDesktop from './assets/sneakers-desktop.jpg';
import sneakersTablet from './assets/sneakers-tablet.jpg';

export const navItems = [
  {
    hash: '#home',
    content: 'Home',
  },
  {
    hash: '#works',
    content: 'Works',
  },
  {
    hash: '#about',
    content: 'About',
  },
  {
    hash: '#contact',
    content: 'Contact',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Interactive Comment Section',
    description:
      'A small piece of app in which users can post comments or reply to current ones, upvote/downvote, and more.',
    images: {
      desktop: commentDesktop,
      tablet: commentTablet,
    },
    tags: ['React', 'Firebase'],
    liveSite: 'https://comment.xuanhung.me/',
    sourceCode: 'https://github.com/xuanhung1509/interactive-comment-section',
  },
  {
    id: 2,
    title: 'TodoHub',
    description:
      'The classic todo-list plus authentication, dark-theme and drag & drop. Users can sign up for an account, customize profile picture. Add, check and filter tasks, and much more.',
    images: {
      desktop: todoDesktop,
      tablet: todoTablet,
    },
    tags: ['React', 'SCSS', 'Firebase'],
    liveSite: 'https://todo.xuanhung.me/',
    sourceCode: 'https://github.com/xuanhung1509/todo-hub',
  },
  {
    id: 3,
    title: 'Sneakers E-commerce',
    description:
      'A multi-page e-commerce website with payment implementation. Users can view product info, add to cart and pay with Paypal or credit card.',
    images: {
      desktop: sneakersDesktop,
      tablet: sneakersTablet,
    },
    tags: [
      'React',
      'Redux',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'Swiper',
      'Paypal',
    ],
    liveSite: 'https://sneakers.xuanhung.me/',
    sourceCode: 'https://github.com/xuanhung1509/sneakers-ecommerce',
  },
];

export const socialMedia = [
  {
    id: 'github',
    icon: <FiGithub size={20} />,
    link: 'https://github.com/xuanhung1509',
  },
  {
    id: 'facebook',
    icon: <FiFacebook size={20} />,
    link: 'https://www.facebook.com/vuxuanhung1509',
  },
  {
    id: 'codepen',
    icon: <FiCodepen size={20} />,
    link: 'https://codepen.io/xuanhung1509',
  },
];

export const formInputs = [
  {
    type: 'text',
    id: 'name',
    label: 'Name',
    placeholder: 'John Doe',
    required: true,
  },
  {
    type: 'email',
    id: 'email',
    label: 'Email',
    placeholder: 'john@gmail.com',
    required: true,
  },
  {
    type: 'textarea',
    id: 'message',
    label: 'Message',
    placeholder: 'Hello world!',
    required: true,
  },
];
