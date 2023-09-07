import React from "react";
import Image from "next/image";
const AlumniCard = ({title,img,company,designation,key}) => {
  return (
    <div key={key} class="rounded w-64 hover:w-72 duration-500 ease-in-out border-2 overflow-hidden shadow-lg border-blue-900 flex flex-col justify-center items-center">
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
            <header class="flex flex-col gap-3">
              <h3 class="text-xl font-medium text-slate-700">{title}</h3>
              <p class="text-sm text-slate-400">
                {designation} at {company}
              </p>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
