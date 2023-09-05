import React from "react";
import Image from "next/image";
const PlacementCard = ({ title, description, img, speakers }) => {
  const displayedText =
    description?.length > 50 ? `${description.slice(0, 70)}...` : description;
  return (
    <div class="rounded lg:h-56 lg:w-64 w-52 border-2 overflow-hidden shadow-lg border-blue-900 flex flex-col justify-center items-center">
      <div class="h-full flex flex-col justify-between bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <Image
          width={300}
          height={300}
          src={img}
          alt="card image"
          class="w-full h-36"
        />
        <div class="p-3 text-center">
          <h3 class="text-xl font-medium text-slate-700">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
