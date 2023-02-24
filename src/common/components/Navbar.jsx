import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";

const Navbar = () => {
  const opener = () => {
    const navbar = document.getElementById("navbar-search");
    navbar.classList.toggle("hidden");
  };

  return (


    <nav class="bg-transparent z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded flex justify-between">

    <nav class="bg-stone-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded flex justify-between">


      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex">
          <a href="/" class="flex items-center">
            <Image
              src={Logo}
              class="w-15 sm:h-9 lg:mr-2 "
              alt="Flowbite Logo"
            />
            <h1 className="hidden md:block  text-blue-800 font-bold text-xs md:text-2xl lg:mr-7 ">
              SAIT CUSAT{" "}
            </h1>
            <h1 className="block md:hidden text-blue-800 font-bold text-3xl ml-1 md:text-xs lg:text-sm md:mx-3 ">
              SAIT{" "}
            </h1>
          </a>
          <div class="relative hidden lg:block">
            <input
              type="text"
              id="search-navbar"
              class="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
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
              <span class="sr-only">Search icon</span>
            </div>
          </div>
        </div>
        <div class="flex md:order-1">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class=" md:hidden text-gray-500 hover:underline  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            onClick={opener}
          >
            <svg
              class="w-5 h-5"
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
            <span class="sr-only">Search</span>
          </button>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:underline focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={opener}
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="w-6 h-6"
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
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 hidden md:block"
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
              class="hidden md:block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
            />
          </div>
          <ul
            id="navbar-open"
            class="text-blue-900 tracking-wide font-bold flex bg-transparent justify-center items-center flex-col p-4 mt-4 border rounded-lg md:flex-row lg:space-x-8 md:space-x-6 md:mt-0 md:text-sm md:font-bold md:border-0  "
          >
            <li>
              <div class="relative block md:hidden">
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search..."
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500"
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
                  <span class="sr-only">Search icon</span>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/"
                class="block py-2  rounded hover:underline md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="placement/"
                class="block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                Placements
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                Learning Club
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                Portal
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
    </nav>


  );
};

export default Navbar;
