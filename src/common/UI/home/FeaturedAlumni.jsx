import {React,useState,useEffect} from "react";
import FeaturedAlumniCard from "./FeaturedAlumniCard";
import saitimage from "../../../../public/logo white.png";
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
    const query = `*[_type == "alumni"] {
    name,
    company,
    designation,
    "imageUrl": image.asset->url,
    yearOfPassout,
    bio
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
    <div className="lg:h-[35rem] md:h-[45rem]">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
          FEATURED ALUMNI
        </h1>
        <p className="xl:w-[30rem] w-full mb-6">
          Meet our illustrious alumni who have made their mark in the world of
          Information Technology. From influential tech entrepreneurs to top
          executives at global IT corporations, our department's renowned alumni
          continue to shape the future of technology and innovation.
        </p>
        {/* cards */}
        <div className="flex lg:flex-row-reverse justify-center items-center md:mt-16 md:flex-row flex-col flex-wrap lg:absolute lg:right-3 lg:-bottom-[14rem] xl:-bottom-[9rem] gap-3">
          {alumnis.map((alumni, index) => (
            <div key={alumni.id}>
              <FeaturedAlumniCard
                key={index}
                title={alumni.name}
                description={alumni.company}
                img={alumni.img}
              />
            </div>
          ))}
          <Link
            href="/alumni"
            className="self-center sm:mr-[25px] sm:ml-6 font-bold text-[#E7ECEF] lg:text-blue-900 lg:text-center lg:pr-3 xl:mt-32 mt-12"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedAlumni;
