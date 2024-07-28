import Image from "next/image";
import Hero from "../../components/Hero/Hero";
import NewPosts from "../../components/NewPosts/NewPosts";
import TopTags from "../../components/TopTags/TopTags";
import LatestVideo from "../../components/LatestVideo/LatestVideo";
import SliderSection from "../../components/SliderSection/SliderSection";
import { posts, topPosts, trendyPosts } from "../../data/Index";


export default function Home() {
  return (
   <div>
    <TopTags/>
    <Hero/>
    <SliderSection posts={posts} text={"Popular Post"}/>
    <NewPosts />
    <LatestVideo/>
    <SliderSection posts={trendyPosts} text={"Trendy Post"}/>
    <SliderSection posts={topPosts} text={"Top Post"}/>
   </div>
  );
}
