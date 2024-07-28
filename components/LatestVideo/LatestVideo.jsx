"use client";
import React, { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { latestBoxes, latestVideo } from "../../data/Index";
import Image from "next/image";
SwiperCore.use([Navigation, Autoplay]);

const LatestVideo = () => {
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
      <section className="bg-gray-100 w-full mobile:mx-0 mx-[45px] my-[70px] hidden sm:flex">
        <div className="container py-[65px]">
          {/* Title & Navigation btn */}
          <div className="flex justify-between mb-[30px]">
            <div className="relative flex items-center">
              <span className="h-[10px] z-10 absolute -left-2 w-1 bg-red-500 rounded-xl "></span>
              <p className="text-xl leading-[23px] cursor-pointer">
                Latest Video
              </p>
            </div>
            <div className="flex gap-x-5">
              <button
                onClick={slidePrev}
                disabled={isBeginning}
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                  isBeginning ? "text-black-100/50" : "text-black-100"
                } bg-gray-200 transition-all`}
              >
                <div>
                  <HiChevronLeft className="text-xl" />
                </div>
              </button>
              <button
                // HiChevronLeft
                onClick={slideNext}
                disabled={isEnd}
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                  isEnd ? "text-black-100/50" : "text-black-100 "
                } bg-gray-200 transition-all`}
              >
                <div>
                  <HiChevronRight className="text-xl" />
                </div>
              </button>
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            // spaceBetween={14}

            navigation={false}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   640: {
            //     slidesPerView: 1.5,
            //   },
            //   900: {
            //     slidesPerView: 2,
            //   },
            //   1280: {
            //     slidesPerView: 4,
            //   },
            // }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {latestVideo.map(({ index, title, explanation }) => (
              <div key={index} className="w-full">
              
                  <div className="flex gap-6 w-full">
                    <div className=" Latest_Video h-[444px]  rounded-xl hidden sm:flex">
                      <div className=" relative flex  items-end h-full px-4 py-2">
                        <div className="rounded-xl bg-white/75 w-full flex flex-col gap-2 px-4 py-2">
                          <p className="text-lg font-normal w-[100%] line-clamp-1">
                            {title}
                          </p>
                          <p className="text-sm hidden line-clamp-2 sm:flex w-full">
                            {explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full grid grid-cols-2 h-[444px] gap-1">
                      {latestBoxes.map(
                        ({ index, imgSrc, title, explanation }) => (
                          <div
                            key={index}
                            className="w-full h-[210px] col-span-1  bg-white hover:shadow-normal shadow-md transition-all duration-300 ease-linear flex items-center justify-between mt-2 px-4 me-4 py-[14px] rounded-xl"
                          >
                            <div className="w-full h-full flex items-center p-3">
                              <Image
                                src={imgSrc}
                                alt={title}
                                className=" h-[190px] object-cover rounded-xl"
                              />
                            </div>
                            <div className="p-[10px]">
                              <div className="flex flex-col gap-4 justify-between">
                                <h2 className="text-base font-medium line-clamp-1">
                                  {title}
                                </h2>
                                <p className="text-sm line-clamp-6">
                                  {explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
              
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LatestVideo;
