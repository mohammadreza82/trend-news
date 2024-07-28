import { HiChevronDown, HiChevronRight } from "react-icons/hi";

//   navLinks
export const navItems = [
  {
    name: "Categories",
    link: "#categories",
    icon: <HiChevronDown />,
    iconMobile: <HiChevronRight />,
    dropdown: true,
    dropdownLinks: [
      { id: 1, name: "Name 1", link: "/" },
      { id: 2, name: "Name 2", link: "/" },
    ],
  },
  {
    name: "Pages",
    link: "#pages",
    icon: <HiChevronDown />,
    iconMobile: <HiChevronRight />,
    dropdown: true,
    dropdownLinks: [
      { id: 1, name: "Name 1", link: "/" },
      { id: 2, name: "Name 2", link: "/" },
    ],
  },
  { name: "Contact Us", link: "/contact_us" },
  { name: "About Us", link: "/about_us" },
];

import profileImg from "../public/assets/profile.jpg";
export const profile = [
  {
    name: "behzad",
    src: profileImg,
    icon: <HiChevronDown />,
    dropdown: true,
    dropdownLinks: [
      { id: 1, name: "Name 1", link: "/" },
      { id: 2, name: "Name 2", link: "/" },
    ],
  },
];

//   topTags Maybe It's gonna be slider
// export const topTags = [
//   {
//     id: 1,
//     bg_image: "/public/assets/Food.png",
//     tags: "#Food",
//   },
//   {
//     id: 2,
//     bg_image: "/public/assets/Animal.png",
//     tags: "#Animal",
//   },
//   {
//     id: 3,
//     bg_image: "/public/assets/Car.png",
//     tags: "#Car",
//   },
//   {
//     id: 4,
//     bg_image: "/public/assets/Sport.png",
//     tags: "#Sport",
//   },
//   {
//     id: 5,
//     bg_image: "/public/assets/Music.png",
//     tags: "#Music",
//   },
//   {
//     id: 6,
//     bg_image: "/public/assets/Technology",
//     tags: "#Technology",
//   },
//   {
//     id: 7,
//     bg_image: "/public/assets/Abstract",
//     tags: "#Abstract",
//   },
//   {
//     id: 8,
//     bg_image: "/public/assets/Nature",
//     tags: "#Nature",
//   },
// ];

export const slider = [
  {
    title: "Why I Stopped Using Multiple Monitor",
    explanation:
      "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of...",
  },
];

import Imgsrc1 from "../public/assets/PopularPosts/one.jpg";
import Imgsrc2 from "../public/assets/PopularPosts/two.jpg";
import Imgsrc3 from "../public/assets/PopularPosts/three.jpg";
import Imgsrc4 from "../public/assets/PopularPosts/four.jpg";

// import userAvatars1 from "../../public/assets/NewPosts/NewPost1e1.jpg";
// import userAvatars2 from "../../public/assets/NewPosts/NewPost2e2.jpg";
// import userAvatars3 from "../../public/assets/NewPosts/NewPost3e3.jpg";
// new


export const posts = [
  {
    imgSrc: Imgsrc1,
    title: "Opening Day of Boating Season",
    explanation:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    userAvatar: userAvatar3,
    header: "James",
    subHeader: "August 18 , 2022",
  },
  {
    imgSrc: Imgsrc2,
    title: "How to choose the right laptop",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    userAvatar: userAvatar2,
    header: "Louis Hoebregts",
    subHeader: "July 13 , 2022",
  },
  {
    imgSrc: Imgsrc3,
    title: "How we built the self-driving car",
    explanation:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    userAvatar: userAvatar7,
    header: "Mari",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: Imgsrc4,
    title: "How to Persuade Your Parents to Buy Fast Food",
    explanation:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    userAvatar: userAvatar1,
    header: "Jon Kantner",
    subHeader: "May 10 , 2022",
  },
  {
    imgSrc: Imgsrc1,
    title: "Opening Day of Boating Season",
    explanation:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    userAvatar: userAvatar3,
    header: "James",
    subHeader: "August 18 , 2022",
  },
  {
    imgSrc: Imgsrc2,
    title: "How to choose the right laptop",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    userAvatar: userAvatar2,
    header: "Louis Hoebregts",
    subHeader: "July 13 , 2022",
  },
  {
    imgSrc: Imgsrc3,
    title: "How we built the self-driving car",
    explanation:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    userAvatar: userAvatar7,
    header: "Mari",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: Imgsrc4,
    title: "How to Persuade Your Parents to Buy Fast Food",
    explanation:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    userAvatar: userAvatar1,
    header: "Jon Kantner",
    subHeader: "May 10 , 2022",
  },
];

import imgsrc1 from "../public/assets/NewPosts/NewPost1.jpg";
import imgsrc2 from "../public/assets/NewPosts/NewPost2.jpg";
import imgsrc3 from "../public/assets/NewPosts/NewPost3.jpg";
import imgsrc4 from "../public/assets/NewPosts/NewPost4.jpg";
import imgsrc5 from "../public/assets/NewPosts/NewPost5.jpg";
import imgsrc6 from "../public/assets/NewPosts/NewPost6.jpg";

import userAvatar1 from "../public/assets/NewPosts/NewPost1e1.jpg";
import userAvatar2 from "../public/assets/NewPosts/NewPost2e2.jpg";
import userAvatar3 from "../public/assets/NewPosts/NewPost3e3.jpg";
import userAvatar4 from "../public/assets/NewPosts/NewPost4e4.jpg";
import userAvatar5 from "../public/assets/NewPosts/NewPost5e5.jpg";
import userAvatar6 from "../public/assets/NewPosts/NewPost6e6.jpg";
import userAvatar7 from "../public/assets/NewPost7e7.jpg";
export const newPosts = [
  {
    imgSrc: imgsrc1,
    title: "12 Mobile UX Design Trends For 2018",
    explanation:
      "Things move quickly in the mobile app universe. To succeed in the field of...",
    userAvatar: userAvatar1,
    header: "Jon Kantner",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: imgsrc2,
    title: "No boat bottomfish: fishing on the...",
    explanation:
      "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you...",
    userAvatar: userAvatar2,
    header: "Louis Hoebregts",
    subHeader: "July 13 , 2022",
  },
  {
    imgSrc: imgsrc3,
    title: "What a Disabled Squirrel Taught Me About Life,...",
    explanation:
      "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area...",
    userAvatar: userAvatar3,
    header: "James",
    subHeader: "July 12 , 2022",
  },
  {
    imgSrc: imgsrc4,
    title: "Becoming a Self-Driving Car & Machine Learning...",
    explanation:
      "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite...",
    userAvatar: userAvatar4,
    header: "Cassie Evans",
    subHeader: "July 12 , 2022",
  },
  {
    imgSrc: imgsrc5,
    title: "How to Become a Master Designer",
    explanation:
      "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate...",
    userAvatar: userAvatar5,
    header: "Linda",
    subHeader: "July 10 , 2022",
  },
  {
    imgSrc: imgsrc6,
    title: "This free course can teach you music...",
    explanation:
      "A Berlin-based music software company, just released a free interactive music course that runs right in yo...",
    userAvatar: userAvatar6,
    header: "Patricia",
    subHeader: "July 09 , 2022",
  },
];

export const latestVideo=[
  {
    title:"How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)",
    explanation:"You’ve read all your free member-only stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from."
  }
]

import Latest2 from '@/../../public/assets/Latest/Latest2.jpg'
import Latest3 from '@/../../public/assets/Latest/Latest3.jpg'
import Latest4 from '@/../../public/assets/Latest/Latest4.jpg'
import Latest5 from '@/../../public/assets/Latest/Latest5.jpg'
export const latestBoxes  =[
  {
    imgSrc:Latest2,
    title:"5 reasons why you should wrap your hands when boxing",
    explanation:"So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands."
  },
  {
    imgSrc:Latest3,
    title:"Music Genre Classification with Python",
    explanation:"A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from."
  },
  {
    imgSrc:Latest4,
    title:"Title",
    explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet"
  },
  {
    imgSrc:Latest5,
    title:"Title",
    explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet"
  },
]

import trendy1 from "../public/assets/TrendyPosts/Trendy1.jpg";
import trendy2 from "../public/assets/TrendyPosts/Trendy2.jpg";
import trendy3 from "../public/assets/TrendyPosts/Trendy3.jpg";
import trendy4 from "../public/assets/TrendyPosts/Trendy4.jpg";
export const trendyPosts = [
  {
    imgSrc: trendy1,
    title: "How to build a self-driving car in one month",
    explanation:
      "Can I learn the necessary computer science to build the software part of a self-driving car in one month?",
    userAvatar: userAvatar1,
    header: "Mary",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: trendy2,
    title: "Self-Improvement Has Become An Extreme Sport",
    explanation:
      "What we’re told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we’re supposed to do",
    userAvatar: userAvatar5,
    header: "James",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: trendy3,
    title: "10 Cooking Lessons to Use in Everyday Life",
    explanation:
      "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ",
    userAvatar: userAvatar2,
    header: "Linda",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: trendy4,
    title:
      "Typography can make or break your design: a process for choosing type",
    explanation:
      "One of the most important skills you can learn as a designer is how to choose type. This is because text is one of the primary ways designers can communicate with users. Typography can make or break a design. There’s a beauty and complexity to typography. Some people devote their…",
    userAvatar: userAvatar3,
    header: "Patricia",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: trendy1,
    title: "How to choose the right laptop",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    userAvatar: userAvatar4,
    header: "Robert",
    subHeader: "July 14 , 2022",
  },
];


import TopPost1 from "../public/assets/TopPosts/TopPost1.jpg";
import TopPost2 from "../public/assets/TopPosts/TopPost2.jpg";
import TopPost3 from "../public/assets/TopPosts/TopPost3.jpg";
import TopPost4 from "../public/assets/TopPosts/TopPost4.jpg";
export const topPosts = [
  {
    imgSrc: TopPost4,
    title: "House boating on Lake Shasta",
    explanation:
      "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.",
    userAvatar: userAvatar1,
    header: "Mary",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: TopPost3,
    title: "How to choose the right laptop for programming",
    explanation:
      "What we’re told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we’re supposed to do",
    userAvatar: userAvatar5,
    header: "James",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: TopPost2,
    title:
      "Why Buying a New Car Makes More Sense than Buying Used",
    explanation:
      "Many experts will tell you buying cars used is best for your long-term financial health. Here’s why they’re (mostly) wrong",
    userAvatar: userAvatar3,
    header: "Patricia",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: TopPost1,
    title: "Lasagna is but a Pasta Cake",
    explanation:
      "Re-envision the description of a common food from a different perspective — it is … pasta cake layered with cheese, meat, pasta repeated, bake and serve. ",
    userAvatar: userAvatar4,
    header: "Robert",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: TopPost2,
    title: "10 Cooking Lessons to Use in Everyday Life",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    userAvatar: userAvatar2,
    header: "Linda",
    subHeader: "July 14 , 2022",
  },
];
