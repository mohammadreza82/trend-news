'use client'
import React, { useRef, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineBookmark,
} from "react-icons/hi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { newPosts } from "../../data/Index";
import Image from "next/image";
// import newPost from "../../public/assets/NewPosts/NewPost1.jpg";
// import userAvatar from "../../public/assets/NewPosts/NewPost1e1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);


const NewPosts = () => {

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
    <React.Fragment>
      <div className="container mt-[70px] mb-[30px]">
<<<<<<< HEAD
        <div className="container mx-auto">
=======
        <div>
>>>>>>> 36a442b2291b8fc22c4195d565d95255d2be952b
          <div className="flex justify-between mx-auto mb-[30px]">
            <div className="relative flex items-center gap-1">
              <span className=" h-[10px] z-10 w-1 bg-red-500 rounded-xl "></span>
              <p className="text-xl leading-[23px] cursor-pointer">New Posts</p>
            </div>
            <div>
              <div className="bg-gray-100 h-[40px] w-[120px] gap-2 text-black-100/75 hover:text-black-100 transition-all cursor-pointer rounded-xl sm:flex hidden items-center justify-center">
                <p className="text-sm">Show All</p>
                <HiChevronRight className="text-base" />
              </div>
              {/* Buttons */}
              <div className="sm:hidden flex gap-5">
                {/* Left-Prev slide */}
                <button
                  onClick={slidePrev}
                  disabled={isBeginning}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl ${isBeginning ? "text-black-100/50" : "text-black-100"
                    } bg-gray-100 transition-all`}
                >
                  <div className="w-6 h-6">
                    <ChevronLeftIcon />
                  </div>
                </button>
                {/* Right-Next slide */}
                <button
                  // HiChevronLeft
                  onClick={slideNext}
                  disabled={isEnd}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl ${isEnd ? "text-black-100/50" : "text-black-100 "
                    } bg-gray-100 transition-all`}
                >
                  <div className="w-6 h-6">
                    <ChevronRightIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:grid lg:grid-cols-2 grid-cols-1 gap-4">

            {newPosts.map(
              ({
                index,
                imgSrc,
                title,
                explanation,
                userAvatar,
                header,
                subHeader,
              }) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col sm:flex-row justify-center items-center  rounded-xl hover:shadow-normal shadow-md transition-all duration-300 ease-linear"
                >
                  <div className="w-full h-full flex items-center p-3">
                    <Image
                      src={imgSrc}
                      alt={title}
                      width={340}

                      className="w-full h-[190px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-3 justify-between h-full w-full">
                    <h2 className="text-base font-medium line-clamp-1">{title}</h2>
                    <p className="text-sm line-clamp-2">{explanation}</p>
                    <div className="flex items-center justify-between mt-2 px-4 sm:-ml-3.5 py-[14px] bg-gray-100 rounded-xl">
                      <div className="flex w-full">
                        <Image
                          src={userAvatar}
                          alt={header}
                          className="w-11 h-11 rounded-xl"
                        />
                        <div className="ml-2 flex flex-col gap-1">
                          <p className="text-sm leading-[22px] text-black-100 line-clamp-1">
                            {header}
                          </p>
                          <p className="text-xs leading-[18px] text-black-100/75">
                            {subHeader}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl text-black-100/75 flex justify-center items-center text-xl">
                        <HiOutlineBookmark />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

        </div>
        <div className="block sm:hidden">
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
            {newPosts.map(
              ({
                index,
                imgSrc,
                title,
                explanation,
                userAvatar,
                header,
                subHeader,
              }) => (
                <SwiperSlide
                  key={index}
                  className="col-span-1 flex flex-col sm:flex-row justify-center items-center  rounded-xl hover:shadow-normal shadow-md transition-all duration-300 ease-linear"
                >
                  <div className="w-full h-full flex items-center p-3">
                    <Image
                      src={imgSrc}
                      alt={title}
                      width={340}

                      className="w-full h-[190px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-3 justify-between h-full w-full">
                    <h2 className="text-base font-medium line-clamp-1">{title}</h2>
                    <p className="text-sm line-clamp-2">{explanation}</p>
                    <div className="flex items-center justify-between mt-2 px-4 sm:-ml-3.5 py-[14px] bg-gray-100 rounded-xl">
                      <div className="flex w-full">
                        <Image
                          src={userAvatar}
                          alt={header}
                          className="w-11 h-11 rounded-xl"
                        />
                        <div className="ml-2 flex flex-col gap-1">
                          <p className="text-sm leading-[22px] text-black-100 line-clamp-1">
                            {header}
                          </p>
                          <p className="text-xs leading-[18px] text-black-100/75">
                            {subHeader}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl text-black-100/75 flex justify-center items-center text-xl">
                        <HiOutlineBookmark />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPosts;
