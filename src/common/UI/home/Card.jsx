import React from "react";
import Image from "next/image";
const Card = ({title,description,img,speakers,key}) => {
  const displayedText = description?.length > 50 ? `${description.slice(0, 70)}...` : description;
  return (
      <div className="shadow-lg bg-white rounded-lg w-[240px] min-h-[350px]">
        <Image className="w-full rounded-t-lg h-[259px] object-top object-cover" height={280} width={180} src={img} alt="card image"></Image>
        <h5 className="text-black bg-white h-fit w-full uppercase font-[700] text-[20px] text-center">{title}</h5>
        {/* <p className="text-blue-900">{displayedText}</p> */}
      </div>
  );
};

export default Card;
