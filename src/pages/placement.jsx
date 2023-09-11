import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "../common/components/curosel";
import { client } from "../../sanity/lib/client";
import Link from "next/link";

const PlacementPage = () => {
  const [placements, setPlacements] = useState([]);
  useEffect(() => {
    const query = `*[_type == "placement"] {
      companyName,
      website,
      designationOffering,
      packageOffered,
      numberOfAlumni,
      numberOfEmployees,
      'logoUrl': logo.asset->url // Get the URL of the logo image
    }`;

    // Fetch placement data
    client
      .fetch(query)
      .then((data) => {
        setPlacements(data);
      })
      .catch((error) => {
        console.error("Error fetching placement data:", error);
      });
  }, []);
  return (
    <div className="container mx-auto flex-col justify-between ">
      {/* <Hero /> */}

      <div className="container sm:flex-col">
        <div className=" mx-auto text-center my-14">
          <h1 className="md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
            Our Recruiters
          </h1>
        </div>
        <div className="flex my-10 mx-10 flex-wrap justify-center items-center">
          <Carousel placements={placements} />
        </div>
        <div className="mx-10 text-center my-14 text-blue-500">
          <p>
            Our Department of Information Technology as a launchpad for
            exceptional careers. We have a track record of placing our talented
            students in top-notch companies within the IT industry. Our strong
            ties with renowned recruiters mean that our graduates have the
            opportunity to kickstart their careers with the best in the
            business. It&apos;s like a backstage pass to the world of Information
            Technology where they can shine and make their mark.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap flex-col justify-around container gap-5 mx-auto my-14 p-8">
        {placements.map((company) => (
          <div
            key={company._id}
            className="flex justify-between items-center  rounded-md p-10 bg-blue-900"
          >
            <div className="flex flex-wrap gap-3 justify-between max-[677px]:flex-col ">
              <div className="w-32">
                <Image
                  src={company.logoUrl}
                  alt="Picture of the author"
                  width={66}
                  height={66}
                  className="object-contain w-24 h-24"
                />
              </div>
              <div className="flex flex-wrap flex-col justify-between  text-stone-200 capitalize">
                <h1 className="text-3xl max-[769px]:text-xl font-semibold ">
                  {company.companyName}
                </h1>
                <p className="text-xl">
                  number of Employees: {company.numberOfEmployees}+
                </p>
              </div>
            </div>
            <div className="flex max-[677px]:flex-col">
              <button class="bg-transparent text-stone-200 font-bold hover:bg-stone-200 hover:text-blue-900 py-1 mx-2 px-14  border border-stone-200 hover:border-transparent rounded">
                {company.numberOfAlumni} of our Alumnis are currently working
                here
              </button>
              <Link
                href={company.website}
                class="bg-transparent text-stone-200 font-semibold hover:bg-stone-200 hover:text-blue-900 py-1 mx-2 px-14 border border-stone-200 hover:border-transparent rounded"
              >
                know more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-bg-image md:bg-cover md:bg-center py-10 md:py-24 mt-14 mx-auto h-screen px-5 md:px-10 text-white flex flex-col justify-center items-center">
        <button className="px-9 mt-10 mb-14 py-1.5 border-2 rounded-md border-stone-200 font-bold text-stone-200">
          EXPLORE
        </button>
        <div className="max-w-7xl mx-auto text-center">
          <p>
            The Department of Information Technology at Cochin University of
            Science and Technology, established in 1995, is a trailblazer in the
            field. We are committed to innovation and excellence, driven by an
            insatiable curiosity about Information Technology. Our dedicated
            faculty team passionately nurtures young minds into exceptional IT
            engineers. What sets us apart is our active pioneering of the
            digital age, from user-centric interfaces to cybersecurity and
            artificial intelligence. We continuously push the boundaries of
            knowledge, eager for a brighter IT landscape. Our Students
            Association of Information Technology (SAIT), run by students with
            faculty support, enhances the student experience through workshops,
            seminars, tech projects, and department magazines. SAIT fosters a
            career-specific outlook and maintains an open feedback forum,
            ensuring the department&apos;s continual growth and excellence. Together,
            we shape the future of IT with innovation, dedication, and
            student-centricity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacementPage;
