import { HiChevronDown, HiChevronRight } from "react-icons/hi";

//   navLinks
export const navItems = [
  { name: "Categories", link: "#categories",icon:<HiChevronDown />,iconMobile:<HiChevronRight /> },
  { name: "Pages", link: "#pages",icon:<HiChevronDown/>,iconMobile:<HiChevronRight />},
  { name: "Contact Us", link: "/contact_us" },
  { name: "About Us", link: "/about_us" },
];

import profileImg from "../public/assets/profile.jpg"
export const profile = [
  { name: "behzad", src:profileImg,icon:<HiChevronDown/>},

];

//   topTags Maybe It's gonna be slider
export const topTags = [
  {
    id: 1,
    bg_image: "/public/assets/Food.png",
    tags: "#Food",
  },
  {
    id: 2,
    bg_image: "/public/assets/Animal.png",
    tags: "#Animal",
  },
  {
    id: 3,
    bg_image: "/public/assets/Car.png",
    tags: "#Car",
  },
  {
    id: 4,
    bg_image: "/public/assets/Sport.png",
    tags: "#Sport",
  },
  {
    id: 5,
    bg_image: "/public/assets/Music.png",
    tags: "#Music",
  },
  {
    id: 6,
    bg_image: "/public/assets/Technology",
    tags: "#Technology",
  },
  {
    id: 7,
    bg_image: "/public/assets/Abstract",
    tags: "#Abstract",
  },
  {
    id: 8,
    bg_image: "/public/assets/Nature",
    tags: "#Nature",
  },
];

export const slider = [
  {
    title: "Why I Stopped Using Multiple Monitor",
    explanation:
      "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of..."
  },
];


export const postCards = [
  {
    img: "/",
    title: "How to Persuade Your Parents to Buy Fast Food",
    explanation:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    profileImg: "/",
    header: "Jon Kantner",
    subhead: "May 10 , 2022",
  },
  {
    img: "/",
    title: "How we built the first real self-driving car",
    explanation:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    profileImg: "/",
    header: "Mary",
    subhead: "July 14 , 2022",
  },
  {
    img: "/",
    title: "How to choose the right laptop for programming",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    profileImg: "/",
    header: "Louis Hoebregts",
    subhead: "July 25 , 2022",
  },
  {
    img: "/",
    title: "Opening Day of Boating Season, Seattle WA",
    explanation:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    profileImg: "/",
    header: "James",
    subhead: "August 18 , 2022",
  },
];


// export const newPosts=[
//   {
//     imgSrc:,
//     title:"12 Mobile UX Design Trends For 2018",
//     explanation:"Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
//     userAvatar:,
//     header:"Jon Kantner",
//     subHeader:"July 14 , 2022"
//   },
//   {
//     imgSrc:,
//     title:"No boat bottomfish: Jetty fishing on the Washington Coast  ",
//     explanation:"Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home deliciou",
//     userAvatar:,
//     header:"Louis Hoebregts",
//     subHeader:"July 13 , 2022"
//   },
//   {
//     imgSrc:,
//     title:"",
//     explanation:"",
//     userAvatar:,
//     header:"",
//     subHeader:""
//   },
//   {
//     imgSrc:,
//     title:"",
//     explanation:"",
//     userAvatar:,
//     header:"",
//     subHeader:""
//   },
//   {
//     imgSrc:,
//     title:"",
//     explanation:"",
//     userAvatar:,
//     header:"",
//     subHeader:""
//   },
//   {
//     imgSrc:,
//     title:"",
//     explanation:"",
//     userAvatar:,
//     header:"",
//     subHeader:""
//   },
// ]