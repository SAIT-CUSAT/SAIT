import React from "react";
import Image from "next/image";
const Cards = (props) => {
  const displayedText =
    props.text.length > 25 ? `${props.text.slice(0, 25)}...` : props.text;
  return (
    <div className="max-w-sm w-[225px] h-[320px] bg-white rounded-lg shadow-xl">
      <Image
        src={props.img}
        alt="Event Image"
        className="w-full h-[225px] object-top object-cover rounded-t-lg"
        height={200}
        width={200}
      ></Image>
      <div
        className="p-5 h-max text-center"
      >
        <h5 className="mb-2 text-lg font-bold tracking-tight uppercase text-gray-900">
          {displayedText}
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

export default Cards;
