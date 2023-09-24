import React from "react";
import Image from "next/image";
const PlacementCard = ({ title, description, img, speakers,key }) => {
  const displayedText =
    description?.length > 50 ? `${description.slice(0, 70)}...` : description;
  return (
    <div key={key} class="rounded-lg h-[280px] w-[225px] bg-white overflow-hidden shadow-lg flex flex-col justify-center items-center">
      <div class="h-full flex flex-col justify-between rounded shadow-md text-slate-500 shadow-slate-200">
        <Image
          width={300}
          height={300}
          src={img}
          alt="card image"
          className="h-[225px] object-top object-contain"
        />
       <div class="p-3 text-center w-[298px] h-[180px]">
          <h3 class="text-xl font-medium text-slate-700">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
