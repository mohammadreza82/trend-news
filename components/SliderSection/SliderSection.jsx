"use client";
import React, { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { HiOutlineBookmark } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);



function SliderSection(props) {
  const { posts, latestVideo, text } = props
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
    <div className="container mt-[60px] mb-[70px]  ">
      {/* Title & Navigation btn */}
      <div className="flex justify-between">
        <div className="relative flex items-center gap-1">
          <span className="h-[10px] z-10 w-1 bg-red-500 rounded-xl "></span>
          <p className="text-xl leading-[23px] cursor-pointer">{text}</p>
        </div>
        <div className="flex gap-x-5">
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
          {posts.map(({ imgSrc, title, explanation, userAvatar, header, subHeader, index }) => (
            <SwiperSlide key={index}>
              <div className="flex flex-1 flex-col items-center gap-y-4 p-3 rounded-2xl my-[30px] shadow-normal  transition-all duration-300 ease-linear">
                {/* Image */}
                <Image
                  src={imgSrc}
                  alt={title}
                  className="w-full h-48 rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <h5 className="font-semibold text-black-100 line-clamp-1">
                    {title}
                  </h5>
                  {/* Sub */}
                  <p className="text-sm text-black-100/75 line-clamp-2">
                    {explanation}
                  </p>
                </div>
                {/* Box title */}
                {/* Info */}
                <div className="flex w-full justify-between items-center mt-2 px-4 py-[14px] bg-gray-100 rounded-xl">
                  <div className="flex">
                    <Image
                      src={userAvatar}
                      alt={header}
                      className="w-11 h-11 rounded-xl"
                    />
                    <div className="ml-2 flex flex-col gap-1">
                      <p className="text-sm leading-[22px] text-black-100">
                        {header}
                      </p>
                      <p className="text-xs leading-[18px] text-black-100/75">
                        {subHeader}
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

export default SliderSection;
