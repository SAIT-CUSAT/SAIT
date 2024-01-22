import { React, useState, useEffect } from "react";
import FeaturedAlumniCard from "./FeaturedAlumniCard";
import Link from "next/link";
import { client } from "../../../../sanity/lib/client";

const openModal = (alumni) => {
  setSelectedAlumni(alumni);
};

const closeModal = () => {
  setSelectedAlumni(null);
};

function FeaturedAlumni() {
  const [alumnis, setalumnis] = useState([]);

  useEffect(() => {
    // Fetch alumni data using GROQ query
    const query = `*[_type == "alumni"] | order(_createdAt desc)  [0..3] {
      name,
      company,
      designation,
      "imageUrl": image.asset->url,
      yearOfPassout,
    }`;

    client
      .fetch(query)
      .then((data) => {
        // Set the fetched data in the state
        setalumnis(data);
      })
      .catch((error) => {
        console.error("Error fetching alumni data:", error);
      });
  }, []);

  return (
    <div className="md:h-auto">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
          FEATURED ALUMNI
        </h1>
        <p className="w-full mb-6 text-center">
          Meet our illustrious alumni who have made their mark in the world of
          Information Technology. From influential tech entrepreneurs to top
          executives at global IT corporations, our department&apos;s renowned alumni
          continue to shape the future of technology and innovation.
        </p>
        {/* cards */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-center items-center gap-12">
          {alumnis.map((alumni, index) => (
            <div key={alumni.id} className="">
              <FeaturedAlumniCard
                title={alumni.name}
                description={alumni.company}
                img={alumni.imageUrl}
              />
            </div>
          ))}
        </div>
        <Link
          href="/alumni"
          className="self-center sm:mt-5 font-bold text-[#E7ECEF] lg:text-blue-900 lg:text-center lg:pr-3 mt-8 text-center"
        >
          VIEW ALL -&gt;
        </Link>
      </div>
    </div>
  );
}

export default FeaturedAlumni;
