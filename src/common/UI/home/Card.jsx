import React from "react";
import Image from "next/image";
const Card = ({title,description,img,speakers,key}) => {
  const displayedText = description?.length > 50 ? `${description.slice(0, 70)}...` : description;
  return (
    <div key={key} class="rounded w-64 border-2 overflow-hidden shadow-lg border-blue-900 flex flex-col justify-center items-center">
      <div className="">
        <div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
          <figure>
            <Image
              width={300}
              height={300}
              src={img}
              alt="card image"
              class="w-full"
            />
          </figure>
          <div class="p-3">
            <header class="mb-4">
              <h3 class="text-xl font-medium text-slate-700">{title}</h3>
              {speakers?.length > 0 && (<p class="text-sm text-slate-400">
                By
                {speakers?.map((speaker, index) => (
                  <span key={index} className="">
                    {" " + speaker.name}
                    {index === speakers.length - 1
                      ? "."
                      : index === speakers.length - 2
                      ? " and "
                      : ", "}
                  </span>
                ))}
              </p>)}
            </header>
            <p className="flex flex-wrap">{displayedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
