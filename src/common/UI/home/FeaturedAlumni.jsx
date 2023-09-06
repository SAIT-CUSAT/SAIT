import React from "react";
import FeaturedAlumniCard from "./FeaturedAlumniCard";
import saitimage from "../../../../public/logo white.png";
import Link from "next/link";
const alumnis = [
  {
    id: 1,
    name: "rahul",
    company: "IBM",
    img: saitimage,
  },
  {
    id: 2,
    name: "rahul",
    company: "IBM",
    img: saitimage,
  },
  {
    id: 3,
    name: "rahul",
    company: "IBM",
    img: saitimage,
  },
];
function FeaturedAlumni() {
  return (
    <div className="md:h-[45rem]">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
          FEATURED ALUMNI
        </h1>
        <p className="xl:w-1/4 w-full mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla luctus, nunc nisl aliquam nisl, eu aliquam nunc nisl eu.
        </p>
        {/* cards */}
        <div className="flex lg:flex-row-reverse justify-center items-center md:mt-16 md:flex-row flex-col flex-wrap lg:absolute lg:right-3 lg:-bottom-[14rem] xl:-bottom-[9rem] gap-3">
          
          {alumnis.map((alumni) => (
            <div key={alumni.id}>
              <FeaturedAlumniCard
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
