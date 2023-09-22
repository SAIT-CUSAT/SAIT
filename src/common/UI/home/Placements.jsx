import React, { useState, useEffect } from "react";
import { client } from "../../../../sanity/lib/client";
import PlacementCard from "./PlacementCard";
import Link from "next/link";

function Placements() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const query = `*[_type == "placement"] | order(_createdAt desc) [0..2] {
      companyName,
      designationOffering,
      packageOffered,
      numberOfAlumni,
      numberOfEmployees,
      logo {
        asset -> {
          url
        }
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("hello world");
        console.log("Fetched data:", data);
        setPlacements(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="md:h-[45rem]">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <div className="flex flex-col md:items-end">
          <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
            PLACEMENTS
          </h1>
          <p className="xl:w-[30rem] w-full md:mb-0 mb-5 md:text-left text-center">
            The Department of Information Technology boasts a stellar placement
            record. With strong industry ties and comprehensive career support,
            our students are well-prepared for the job market. They secure
            positions in leading IT companies, making us a preferred choice for
            those seeking a successful career in technology.
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-wrap mt-5 items-center md:flex-row flex-col md:absolute xl:-bottom-[6.1rem] lg:-bottom-[1rem]  md:left-[16rem] mb-[-130px]">
          {placements.map((placement, index) => (
            <div key={index}>
              <PlacementCard
                key={index}
                title={placement.companyName}
                img={placement.logo.asset.url}
              />
            </div>
          ))}
          <Link
            href="/placement"
            className="self-center sm:ml-6 font-bold text-[#E7ECEF] md:text-blue-900 lg:text-center lg:pr-3 xl:mt-32"
          >
            VIEW ALL PLACEMENTS -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Placements;
