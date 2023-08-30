import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ title, description, img }) {
  // console.log("title", title, "description", description);
  return (
    <div className="flex flex-col items-center p-2 w-[15rem] min-h-[15rem] bg-white border-2 border-blue-900 shadow mr-4">
      <Link href="#" className="bg-red-500 w-full">
        <Image width={300} height={300} className="w-full h-32 object-fit" src={img} alt="" />
      </Link>
      <div className="text-center w-full flex flex-grow flex-col justify-center items-center">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
            {title}
          </h5>
        </Link>
        {description !== "" && (
          <p className="font-normal text-gray-300">
            {description && description.length > 50
              ? `${description.slice(0, 70)}...`
              : description}
          </p>
        )}
      </div>
    </div>
  );                                            
}

export default Card;
