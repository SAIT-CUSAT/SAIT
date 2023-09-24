import React from "react";
import Image from "next/image";
const AlumniCard = ({ title, img, company, designation, key }) => {
  const displayedText =
    title.length > 15 ? `${title.slice(0, 15)}...` : title;
  return (
    <div className="max-w-sm w-[235px] h-[350px] transform transition-transform hover:scale-110 duration-500 bg-white rounded-lg shadow-xl">
      <Image
        src={img}
        alt="Event Image"
        className="w-full h-[235px] object-top object-cover rounded-t-lg"
        height={200}
        width={200}
      ></Image>
      <div
        className="p-5 h-max text-center"
      >
        <h5 className="mb-2 text-lg font-bold tracking-tight uppercase text-gray-900">
          {displayedText}
        </h5>
        <h5 className="mb-2 text-md font-medium tracking-tight text-slate-600">
          {designation} at {company}
        </h5>
        {/* <p className="flex justify-center">{props.speakers.map((speaker,index)=>(
          <div key={index}>
            {speaker.name}
          </div>
        ))}</p> */}
      </div>
    </div>
  );
};

export default AlumniCard;
