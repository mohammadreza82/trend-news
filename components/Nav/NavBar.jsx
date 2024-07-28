"use client";
import React, { useState } from "react";
import { navItems, profile } from "../../data/Index";
import Link from "next/link";
import {
  HiDotsVertical,
  HiOutlineBookmark,
  HiOutlineSearch,
} from "react-icons/hi";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <nav className=" md:py-11 py-[25px] md:shadow-none shadow-xl">
        <div className="container flex  justify-between items-center  mx-auto">
          {/* LeftSide */}
          <div className="flex items-center lg:gap-[60px] gap-[20px]">
            {/* hamburger Menu */}
            <div className="relative z-50 md:hidden flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-gray-100 focus:outline-none focus:bg-gray-200 rounded-md"
              >
                <RxHamburgerMenu className="w-6 h-6" />
              </button>
              <div
                className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}
              >
                <div className="w-[80%] mx-auto mt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[22px] text-secondary-100 font-Robot font-bold leading-[22px]">
                      MEGA.news
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 focus:outline-none bg-gray-100 focus:bg-gray-200 rounded-md"
                    >
                      <IoCloseSharp className="w-6 h-6" />
                    </button>
                  </div>
                  <nav className="mt-8">
                    <ul className="flex flex-col gap-4">
                      {navItems.map(
                        ({
                          index,
                          name,
                          link,
                          iconMobile,
                          dropdown,
                          dropdownLinks,
                        }) => (
                          <li
                            key={index}
                            className="group hover:bg-gray-100 hover:p-4 hover:rounded-xl transition-all duration-300 ease-linear"
                          >
                            {iconMobile && dropdown ? (
                              <div>
                                <Link
                                  href={link}
                                  className="flex items-center justify-between"
                                >
                                  <p className="relative z-10 flex items-center">
                                    <span className="h-[10px] absolute -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                                    {name}
                                  </p>
                                  <p className="text-black-100/50 text-xl transform transition-transform duration-300 ease-linear group-hover:rotate-90">
                                    {iconMobile}
                                  </p>
                                </Link>
                                <ul>
                                  {dropdownLinks.map(({ id, name, link }) => (
                                    <li
                                      key={id}
                                      className="group hidden group-hover:block mt-1"
                                    >
                                      <Link
                                        href={link}
                                        className="inline-block w-full rounded-md p-2 hover:bg-primary-light/20 transition-transform duration-300 ease-linear"
                                      >
                                        {name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link href={link} className="flex items-center">
                                <p className="relative z-10 flex items-center">
                                  <span className="h-[10px] absolute -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                                  {name}
                                </p>
                              </Link>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="sm:flex hidden">
              {/* Logo */}
              <p className="text-[22px] text-secondary-100 font-Robot font-bold leading-[22px]">
                MEGA.news
              </p>
            </div>
            {/* NavLinks */}
            <div className="md:flex hidden">
              <ul className="flex justify-evenly lg:gap-4 gap-2">
                {navItems.map(
                  ({ index, name, link, icon, dropdown, dropdownLinks }) => (
                    <li key={index}>
                      {icon && dropdown ? (
                        <div className="group relative cursor-pointer">
                          <Link href={link} className="flex items-center">
                            <p>{name}</p>
                            <p className="text-black-100/50 text-xl transition-all duration-300">
                              {icon}
                            </p>
                          </Link>
                          <div className="absolute z-10 hidden group-hover:block w-[200px] rounded-md bg-white p-2  text-black shadow-md">
                            <ul>
                              {dropdownLinks.map(({ id, name, link }) => (
                                <li key={id}>
                                  <Link
                                    href={link}
                                    className="inline-block w-full hover:bg-gray-100 rounded-md p-2 hover:bg-primary-light/20 "
                                  >
                                    <p className="relative z-20 flex items-center">
                                      <span className="h-[10px] absolute -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                                      {name}
                                    </p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <Link href={link} className="flex items-center">
                          <p>{name}</p>
                        </Link>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          {/* RightSide */}
          <div className="hidden items-center gap-3 sm:flex">
            {/* SearchBar & ProfileSection */}
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex ">
                {/* <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label> */}
                <div className="relative hidden customlg:flex">
                  <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none">
                    <HiDotsVertical
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-600"
                    />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className=" w-[250px] p-2.5 ps-10 pe-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-100 "
                    placeholder="Search Anything "
                  />
                  <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                    <HiOutlineSearch
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-600 "
                    />
                  </div>
                </div>
              </div>
              <div>
                {profile.map(({ index, name, src, icon }) => (
                  <div key={index} className="flex items-center gap-1">
                    <Image
                      src={src}
                      alt={name}
                      className="w-10 h-10 rounded-xl"
                    />
                    <p>{name}</p>
                    <p className="w-4 h-4">{icon}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* BookMark */}
            <div className="rounded-xl bg-gray-100 w-10 h-10 flex justify-center items-center text-xl">
              <HiOutlineBookmark />
            </div>
          </div>
           {/* SearchBar */}
         <div className="container w-full sm:py-4 sm:hidden flex">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none">
                <HiDotsVertical
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-600"
                />
              </div>
              <input
                type="search"
                id="default-search"
                className="w-full p-2.5 ps-10 pe-10 text-sm text-gray-800 border border-gray-300 rounded-xl bg-gray-100"
                placeholder="Search Anything"
                // style={{ padding: "14px 16px 14px 36px" }}
              />
              <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none">
                <HiOutlineSearch
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
         {/* SearchBar */}
         <div className="container w-full py-4 md:hidden hidden sm:flex">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none">
                <HiDotsVertical
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-600"
                />
              </div>
              <input
                type="search"
                id="default-search"
                className="w-full p-2.5 ps-10 pe-10 text-sm text-gray-800 border border-gray-300 rounded-xl bg-gray-100"
                placeholder="Search Anything"
                // style={{ padding: "14px 16px 14px 36px" }}
              />
              <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none">
                <HiOutlineSearch
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-600"
                />
              </div>
            </div>
          </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
