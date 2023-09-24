import React from "react";
import Image from "next/image";
const FeaturedAlumniCard = ({ title, description, img }) => {
  const displayedText =
    description?.length > 25 ? `${description.slice(0, 70)}...` : description;
  const displayedName =
    title?.length > 15 ? `${title.slice(0, 15)}...` : title;
  return (
    <div key={key} class="rounded h-[380px] lg:w-[298px]  border-2 overflow-hidden shadow-lg border-blue-900 flex flex-col justify-center items-center mr-[65rem] mb-[-10px] ">
      <div class="flex flex-col justify-center items-center w-full overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <figure className="w-full">
          <Image
            width={300}
            height={300}
            src={img}
            alt="card image"
            class="h-full object-top object-cover"
          />
        </figure>
        <div class="p-3">
            <h3 class="text-xl text-center mb-2 font-medium text-slate-700">{displayedName}</h3>
          <p className="w-full text-lg text-center">{displayedText}</p>
        </div>
      </div>
  );
};

export default FeaturedAlumniCard;
