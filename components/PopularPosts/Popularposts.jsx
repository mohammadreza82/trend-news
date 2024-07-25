"use client";
import React, { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { HiOutlineBookmark } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import imgsrc1 from "../../public/assets/PopularPosts/one.jpg";
import imgsrc2 from "../../public/assets/PopularPosts/two.jpg";
import imgsrc3 from "../../public/assets/PopularPosts/three.jpg";
import imgsrc4 from "../../public/assets/PopularPosts/four.jpg";

import userAvatar1 from "../../public/assets/NewPosts/NewPost1e1.jpg";
import userAvatar2 from "../../public/assets/NewPosts/NewPost2e2.jpg";
import userAvatar3 from "../../public/assets/NewPosts/NewPost3e3.jpg";
// new
import userAvatar7 from "../../public/assets/NewPost7e7.jpg";

SwiperCore.use([Navigation, Autoplay]);

export const posts = [
  {
    imgSrc: imgsrc1,
    title: "Opening Day of Boating Season",
    explanation:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    userAvatar: userAvatar3,
    header: "James",
    subHeader: "August 18 , 2022",
  },
  {
    imgSrc: imgsrc2,
    title: "How to choose the right laptop",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    userAvatar: userAvatar2,
    header: "Louis Hoebregts",
    subHeader: "July 13 , 2022",
  },
  {
    imgSrc: imgsrc3,
    title: "How we built the self-driving car",
    explanation:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    userAvatar: userAvatar7,
    header: "Mari",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: imgsrc4,
    title: "How to Persuade Your Parents to Buy Fast Food",
    explanation:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    userAvatar: userAvatar1,
    header: "Jon Kantner",
    subHeader: "May 10 , 2022",
  },
  {
    imgSrc: imgsrc1,
    title: "Opening Day of Boating Season",
    explanation:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    userAvatar: userAvatar3,
    header: "James",
    subHeader: "August 18 , 2022",
  },
  {
    imgSrc: imgsrc2,
    title: "How to choose the right laptop",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    userAvatar: userAvatar2,
    header: "Louis Hoebregts",
    subHeader: "July 13 , 2022",
  },
  {
    imgSrc: imgsrc3,
    title: "How we built the self-driving car",
    explanation:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    userAvatar: userAvatar7,
    header: "Mari",
    subHeader: "July 14 , 2022",
  },
  {
    imgSrc: imgsrc4,
    title: "How to Persuade Your Parents to Buy Fast Food",
    explanation:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    userAvatar: userAvatar1,
    header: "Jon Kantner",
    subHeader: "May 10 , 2022",
  },
];

function Popularposts() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="container mt-[60px] mb-[70px] mobile:mx-0 mx-[45px] ">
      {/* Title & Navigation btn */}
      <div className="flex justify-between">
        <div className="relative flex items-center">
          <span className="h-[10px] z-10 absolute -left-2 w-1 bg-red-500 rounded-xl "></span>
          <p className="text-xl leading-[23px] cursor-pointer">Popular Posts</p>
        </div>
        <div className="flex gap-x-5">
          <button
            onClick={slidePrev}
            disabled={isBeginning}
            className={`flex items-center justify-center w-10 h-10 rounded-xl ${
              isBeginning ? "text-black-100/50" : "text-black-100"
            } bg-gray-100 transition-all`}
          >
            <div className="w-6 h-6">
              <ChevronLeftIcon />
            </div>
          </button>
          <button
          // HiChevronLeft
            onClick={slideNext}
            disabled={isEnd}
            className={`flex items-center justify-center w-10 h-10 rounded-xl ${
              isEnd ? "text-black-100/50" : "text-black-100 "
            } bg-gray-100 transition-all`}
          >
            <div className="w-6 h-6">
              <ChevronRightIcon />
            </div>
          </button>
        </div>
      </div>
      {/* Slider */}
      <div className="flex gap-5">
        <Swiper
          ref={swiperRef}
          spaceBetween={14}
          slidesPerView={2}
          navigation={false}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            900: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-1 flex-col items-center gap-y-4 p-3 rounded-2xl my-[30px] hover:shadow-normal shadow-md transition-all duration-300 ease-linear">
                {/* Image */}
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  className="w-full h-48 rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <h5 className="font-semibold text-black-100 line-clamp-1">
                    {post.title}
                  </h5>
                  {/* Sub */}
                  <p className="text-sm text-black-100/75 line-clamp-2">
                    {post.explanation}
                  </p>
                </div>
                {/* Box title */}
                {/* Info */}
                <div className="flex w-full justify-between items-center mt-2 px-4 py-[14px] bg-gray-100 rounded-xl">
                  <div className="flex">
                    <Image
                      src={post.userAvatar}
                      alt={post.header}
                      className="w-11 h-11 rounded-xl"
                    />
                    <div className="ml-2 flex flex-col gap-1">
                      <p className="text-sm leading-[22px] text-black-100">
                        {post.header}
                      </p>
                      <p className="text-xs leading-[18px] text-black-100/75">
                        {post.subHeader}
                      </p>
                    </div>
                  </div>
                  {/* BookMark */}
                  <div>
                    <div className="rounded-xl text-black-100/75 flex justify-center items-center text-xl">
                      <HiOutlineBookmark />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Popularposts;
