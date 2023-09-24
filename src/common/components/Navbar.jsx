import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const opener = () => {
    const navbar = document.getElementById("navbar-search");
    navbar.classList.toggle("hidden");
  };
  return (
    <nav className="bg-transparent z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded flex justify-between">
      <nav className=" w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded flex justify-between">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                className="w-15 sm:h-9 lg:mr-2 "
                alt="Flowbite Logo"
              />
              <h1 className="hidden md:block  text-blue-800 font-bold text-xs md:text-2xl lg:mr-7 ">
                SAIT CUSAT{" "}
              </h1>
              <h1 className="block md:hidden text-blue-800 font-bold text-3xl ml-1 md:text-xs lg:text-sm md:mx-3 ">
                SAIT{" "}
              </h1>
            </Link>
            {/* <div className="relative hidden lg:block">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
            </div> */}
          </div>
          <div className="flex md:order-1">
            {/* <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className=" md:hidden text-gray-500 hover:underline  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              onClick={opener}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button> */}

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:underline focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={opener}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 hidden md:block"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="hidden md:block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              />
            </div>
            <ul
              id="navbar-open"
              className="text-blue-900 tracking-wide font-bold flex bg-transparent justify-center items-center flex-col p-4 mt-4 border rounded-lg md:flex-row lg:space-x-8 md:space-x-6 md:mt-0 md:text-sm md:font-bold md:border-0  "
            >
              <li>
                <div className="relative block md:hidden">
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search..."
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2  rounded hover:underline md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="placement/"
                  className="block py-2   rounded hover:underline md:hover:bg-transparent "
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="events/"
                  className="block py-2   rounded hover:underline md:hover:bg-transparent "
                >
                  Events
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="relative inline-flex items-center bg-blue-800 w-max px-2 h-max rounded-md text-sm font-bold text-center"
                >
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center border-2 border-white p-1 w-max h-max text-xs font-bold text-white bg-blue-400 rounded-full -top-5 -right-5">
                    New
                  </div>
                  <Link
                    href="/hostels"
                    className="block py-2 rounded hover:underline md:hover:bg-transparent text-white"
                  >
                    Hostels
                  </Link>
                </button>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="block py-2   rounded hover:underline md:hover:bg-transparent "
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  href="executives/"
                  className="block py-2   rounded hover:underline md:hover:bg-transparent "
                >
                  Executives
                </Link>
              </li>
              <li>
                <Link
                  href="/notes"
                  className="block py-2   rounded hover:underline md:hover:bg-transparent "
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block py-2   rounded hover:underline md:hover:bg-transparent "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
