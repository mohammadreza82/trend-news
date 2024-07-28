"use client";
import React, { useRef, useState } from "react";
import { slider } from "../../data/Index";
import DotSliderSlider from "../../public/assets/Dot-SliderSlider.png";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Hero = () => {
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
      <section className="hero mobile:flex hidden py-0 lg:py-5 mobile:px-0 px-[45px]">
        <div className="container gap-4 mx-auto grid grid-cols-4">
          <div className="contentOne h-[400px] customlg:col-span-1 customlg:grid hidden rounded-2xl">
            <div className="relative flex items-end p-[10px]">
              <div className="bg-white/75 rounded-xl flex flex-col gap-[8px] px-[16px] py-[16px]">
                <p className="text-lg font-normal">
                  How to Drive a Car Safely
                </p>
                <p className="text-sm font-normal line-clamp-2">
                  Ah, the joy of the open road—it’s a good feeling. But if
                  you’re new to driving...
                </p>
              </div>
            </div>
          </div>

          <div className="contentTwo h-[400px] customlg:col-span-1 customlg:grid hidden rounded-2xl">
            <div className="relative flex items-end p-[10px]">
              <div className="bg-white/75 rounded-xl flex flex-col gap-[8px] px-[16px] py-[16px]">
                <p className="text-lg font-normal">How to Make Dance Music</p>
                <p className="text-sm font-normal line-clamp-2">
                  Download from verified or trusted uploaders. If you're a
                  BitTorrent user looking...
                </p>
              </div>
            </div>
          </div>

          {slider.map(({ index, title, explanation }) => (
            <div
              key={index}
              className="content-bg h-[400px] customlg:col-span-2 col-span-4 rounded-2xl relative"
            >
              <button
                onClick={slidePrev}
                disabled={isBeginning}
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                style={{ zIndex: 1 }}
              >
                <div className="bg-gray-100 cursor-pointer rounded-xl w-10 h-10 flex items-center justify-center">
                  <HiChevronLeft className="text-xl" />
                </div>
              </button>
              <button
                onClick={slideNext}
                disabled={isEnd}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                style={{ zIndex: 1 }}
              >
                <div className="bg-gray-100 cursor-pointer rounded-xl w-10 h-10 flex items-center justify-center">
                  <HiChevronRight className="text-xl" />
                </div>
              </button>

              <div className="relative flex h-[100%] items-end p-[10px]">
                <div className="bg-white/75 text-balance w-[100%] rounded-xl flex flex-col gap-[8px] px-[16px] py-[8px]">
                  <p className="text-lg font-normal">{title}</p>
                  <p className="text-sm hidden line-clamp-2 sm:flex">
                    {explanation}
                  </p>
                  <div className="flex justify-end items-end ">
                    <Image src={DotSliderSlider} alt={title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
