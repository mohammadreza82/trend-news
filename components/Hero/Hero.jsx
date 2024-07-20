import React from "react";
import { slider } from "../../data/Index";
import DotSliderSlider from "../../public/assets/Dot-SliderSlider.png";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Hero = () => {

  return (
    <React.Fragment>
        <section className="container py-5 ">
          <div className=" gap-4 mx-auto grid grid-cols-4">

            <div className="contentOne h-[452px] customlg:col-span-1 customlg:grid hidden rounded-2xl">
              <div className="relative flex items-end p-[10px]">
                {/* title and explanation */}
                <div className="bg-white/75 rounded-xl flex flex-col gap-[8px] px-[16px] py-[16px]">
                  <p className="text-lg font-normal ">
                    How to Drive a Car Safely
                  </p>
                  <p className="text-xs font-normal ">
                    Ah, the joy of the open road—it’s a good feeling. But if
                    you’re new to driving...
                  </p>
                </div>
              </div>
            </div>

            <div className="contentTwo h-[452px] customlg:col-span-1 customlg:grid hidden  rounded-2xl">
              <div className="relative flex items-end p-[10px]">
                {/* title and explanation */}
                <div className="bg-white/75 rounded-xl flex flex-col gap-[8px] px-[16px] py-[16px]">
                  <p className="text-lg font-normal">
                    How to Make Dance Music
                  </p>
                  <p className="text-xs font-normal ">
                    Download from verified or trusted uploaders. If youre
                    a BitTorrent user Looking...
                  </p>
                </div>
              </div>
            </div>

            {slider.map(({ index, title, explanation }) => (
              <div
                key={index}
                className="content-bg h-[452px] customlg:col-span-2 col-span-4 rounded-2xl relative"
              >
                <div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  style={{ zIndex: 1 }}
                >
                  <div className="bg-gray-100 cursor-pointer rounded-xl w-10 h-10 flex items-center justify-center">
                    <HiChevronLeft className="text-xl"/>
                  </div>
                </div>
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  style={{ zIndex: 1 }}
                >
                  <div className="bg-gray-100 cursor-pointer rounded-xl w-10 h-10 flex items-center justify-center">
                    <HiChevronRight className="text-xl"/>
                  </div>
                </div>

                <div className="relative flex h-[100%] items-end p-[10px]">
                  <div className="bg-white/75 text-balance w-[100%] rounded-xl flex flex-col gap-[8px] px-[16px] py-[8px]">
                    <p className="text-lg font-normal">{title}</p>
                      <p className="text-sm hidden line-clamp-2 sm:flex">
                        {explanation}
                      </p>
                    <div className="flex justify-end items-end ">
                      <Image
                        src={DotSliderSlider}
                        
                        alt={title}
                      />
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
