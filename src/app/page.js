import Image from "next/image";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import NewPosts from "../../components/NewPosts/NewPosts";
import Popularposts from "../../components/PopularPosts/Popularposts";
import TopTags from "../../components/TopTags/TopTags";


export default function Home() {
  return (
   <div>
    <Nav/>
    <TopTags/>
    <Hero/>
    <Popularposts />
    <NewPosts />
   </div>
  );
}
