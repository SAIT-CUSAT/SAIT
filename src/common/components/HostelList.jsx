import React from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";
import Link from "next/link";
function HostelList() {
  const [hostels, setHostels] = useState(null);
  useEffect(() => {
    const query = `*[_type == "hostel"]{
            hostel_name,
            "imageUrl":image.asset->url,
            contact_number,
            location
          }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("Fetched data:", data);
        setHostels(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
          AVAILABLE HOSTELS
        </h1>

        <div className="mt-6 flex gap-3 flex-col items-center md:flex-row">
          {hostels?.map((hostel) => (
            <div
              key={hostel.hostel_name}
              className="group relative border-blue-900 border-2 rounded-md w-max"
            >
              <div className="w-full overflow-hidden group-hover:opacity-75 p-3">
                <Image
                  src={hostel.imageUrl}
                  alt={hostel.hostel_name}
                  height={200} // Adjust this value based on your design
                  width={300} // Adjust this value based on your design
                  className="h-44 w-66 rounded-md"
                />
              </div>
              <div className="mt-4 justify-between flex flex-col">
                <h3 className="text-xl mb-3 text-gray-900 font-bold ml-4 uppercase">
                  {hostel.hostel_name}
                </h3>
                <div>
                  <Link
                    href={hostel.location}
                    class="text-lg  text-blue-900 hover:bg-gray-300  px-3 font-bold sm:border-b-2 sm:pl-3 sm:border-gray-300 py-2 h-max  flex gap-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    View Location
                  </Link>
                  <Link
                    href={`tel:${hostel.contact_number}`}
                    className="rounded-md w-max"
                    passHref
                  >
                    <p className="flex w-full hover:bg-gray-300 items-center text-lg px-4 py-3 text-blue-900 font-bold border-gray-300 h-max gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      {hostel.contact_number}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HostelList;
