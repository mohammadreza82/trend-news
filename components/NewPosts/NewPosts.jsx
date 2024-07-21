import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { newPosts } from "../../data/Index";
import Image from "next/image";

const NewPosts = () => {
  return (
    <React.Fragment>
      {/* <div className="container pt-[70px] pb-[30px]">
        <div>
          <div className="flex justify-between mx-auto mb-[30px]">
            <div className="relative flex items-center">
              <span className="h-[10px] z-10 absolute -left-2 w-1 bg-red-500 rounded-xl "></span>
              <p className="text-xl leading-[23px] cursor-pointer">New Posts</p>
            </div>
            <div className="">
              <div className="bg-gray-100 h-[40px] w-[120px] gap-2 text-black-100/75 cursor-pointer rounded-xl flex items-center justify-center">
                <p className="text-sm">Show All</p>{" "}
                <HiChevronRight className="text-base" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            {newPosts.map(({index, imgSrc, title, explanation, userAvatar,header,subHeader})=>(
              <div key={index} className="col-span-1">{title}</div>
            ))}
            asd</div>
        </div>
      </div> */}
      <div className="container pt-[70px] pb-[30px]">
        <div>
          <div className="flex justify-between mx-auto mb-[30px]">
            <div className="relative flex items-center">
              <span className="h-[10px] z-10 absolute -left-2 w-1 bg-red-500 rounded-xl "></span>
              <p className="text-xl leading-[23px] cursor-pointer">New Posts</p>
            </div>
            <div className="">
              <div className="bg-gray-100 h-[40px] w-[120px] gap-2 text-black-100/75 cursor-pointer rounded-xl flex items-center justify-center">
                <p className="text-sm">Show All</p>
                <HiChevronRight className="text-base" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
                  className="col-span-1 flex justify-center items-center h-[210px] rounded-xl hover:shadow-normal shadow-md transition-all duration-300 ease-linear"
                >
                  <div className="p-3 w-[100%]">
                    <Image
                      src={imgSrc}
                      alt={title}
                      width={340}
                      className="h-[190px] object-cover rounded-xl"
                    />
                  </div>
                  <div >
                    <div className="flex flex-col gap-4">
                      <h2 className="text-base font-medium">{title}</h2>
                      <p className="text-sm">{explanation}</p>
                    </div>
                    <div>

                    <div className="flex items-center mt-2 px-4 me-4 py-[14px] bg-gray-100 rounded-xl">
                      <Image
                        src={userAvatar}
                        alt={header}
                        className="w-11 h-11 rounded-xl"
                      />
                      <div className="ml-2 flex flex-col gap-1">
                        <p className="text-sm leading-[22px] text-black-100">{header}</p>
                        <p className="text-xs leading-[18px] text-black-100/75">{subHeader}</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPosts;
