import React from "react";
import Image from "next/image";
const FeaturedAlumniCard = ({ title, description, img }) => {
  const displayedText =
    description?.length > 25 ? `${description.slice(0, 70)}...` : description;
  const displayedName =
    title?.length > 15 ? `${title.slice(0, 15)}...` : title;
  return (
      <div class="flex flex-col justify-center items-center w-[225px] h-[310px] overflow-hidden bg-white rounded-lg shadow-lg text-slate-500">
        <figure className="w-full h-[225px]">
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
