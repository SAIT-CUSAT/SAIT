import React from "react";
import Image from "next/image";
const PlacementCard = ({ title, description, img, speakers,key }) => {
  const displayedText =
    description?.length > 50 ? `${description.slice(0, 70)}...` : description;
  return (
    <div key={key} class="rounded lg:h-[380px] lg:w-[298px] border-2 bg-white overflow-hidden shadow-lg border-blue-900 flex flex-col justify-center items-center mb-[1.2rem]">
       <div class=" flex flex-col justify-between rounded shadow-md text-slate-500 shadow-slate-200 ">
        <Image
          width={300}
          height={300}
          src={img}
          alt="card image"
          class="h-36"
        />
       <div class="p-3 text-center w-[298px] h-[180px]">
          <h3 class="text-xl font-medium text-slate-700">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
