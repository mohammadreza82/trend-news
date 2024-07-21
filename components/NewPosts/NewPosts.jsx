import React from "react";
import { HiChevronLeft, HiChevronRight, HiOutlineBookmark } from "react-icons/hi";
import { newPosts } from "../../data/Index";
import Image from "next/image";
import newPost from "../../public/assets/NewPosts/NewPost1.jpg";
import userAvatar from "../../public/assets/NewPosts/NewPost1e1.jpg";
const NewPosts = () => {
  return (
    <React.Fragment>
      <div className="container pt-[70px] pb-[30px] mobile:px-0 px-[45px]">
        <div className="container mx-auto">
          <div className="flex justify-between mx-auto mb-[30px]">
            <div className="relative flex items-center">
              <span className="h-[10px] z-10 absolute -left-2 w-1 bg-red-500 rounded-xl "></span>
              <p className="text-xl leading-[23px] cursor-pointer">New Posts</p>
            </div>
            <div className="">
              <div className="bg-gray-100 h-[40px] w-[120px] gap-2 text-black-100/75 cursor-pointer rounded-xl mobile:flex hidden items-center justify-center">
                <p className="text-sm">Show All</p>
                <HiChevronRight className="text-base" />
              </div>
              <div className="mobile:hidden flex gap-5">
                <div className="bg-gray-100 cursor-pointer rounded-xl w-10 h-10 flex items-center justify-center">
                  <HiChevronLeft className="text-xl" />
                </div>
                <div className="bg-gray-100 cursor-pointer rounded-xl w-10 h-10 flex items-center justify-center">
                  <HiChevronRight className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* mobile section */}
            <div className="mobile:hidden container flex flex-col col-span-1 rounded-xl hover:shadow-normal shadow-md transition-all duration-300 ease-linear">
              <div className="p-3">
                <Image src={newPost} className="object-cover rounded-xl" />
              </div>
              <div className="p-3">
                <p className="py-4 px-[6px] text-base text-black-100">
                  12 Mobile UX Design Trends For 2018
                </p>
                <p className="px-[6px] text-sm text-black-100/75">
                  Things move quickly in the mobile app universe. To succeed in
                  the field of mobile UX design, designers...
                </p>
              </div>
              <div className="p-3 ">
                <div className="flex w-full justify-between items-center mt-2 px-4 me-4 py-[14px] bg-gray-100 rounded-xl">
                 <div className="flex">
                   <Image
                    src={userAvatar}
                    alt={"Jon Kantner"}
                    className="w-11 h-11 rounded-xl"
                  />
                  <div className="ml-2 flex flex-col gap-1">
                    <p className="text-sm leading-[22px] text-black-100">
                      <p>Jon Kantner</p>
                    </p>
                    <p className="text-xs leading-[18px] text-black-100/75">
                      <p>July 14 , 2022</p>
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
            </div>
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
                  className="col-span-1 mobile:flex hidden justify-center items-center h-[210px] rounded-xl hover:shadow-normal shadow-md transition-all duration-300 ease-linear "
                >
                  <div className="p-3 w-[100%]">
                    <Image
                      src={imgSrc}
                      alt={title}
                      width={340}
                      className="h-[190px] object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-base font-medium">{title}</h2>
                      <p className="text-sm">{explanation}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mt-2 px-4 me-4 py-[14px] bg-gray-100 rounded-xl">
                        <div className="flex ">
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
                        <div className="rounded-xl text-black-100/75 flex justify-center items-center text-xl">
                <HiOutlineBookmark />
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
