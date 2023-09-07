import React from "react";
import Image from "next/image";
const EventCard = (props) => {
  const displayedText =
    props.para.length > 50 ? `${props.para.slice(0, 70)}...` : props.para;
  return (
    <div key={props.key} class="rounded bg-white w-80 h-full border-2 overflow-hidden shadow-lg border-blue-900 flex flex-col justify-between items-center">
      <div className="">
        <div class="overflow-hidden bg-white rounded text-slate-500 shadow-slate-200">
          <figure>
            <Image
              width={300}
              height={300}
              src={props.img}
              alt="card image"
              class="aspect-[16/10] w-full"
            />
          </figure>
          <div class="p-6">
            <header class="mb-4">
              <h3 class="text-xl font-medium text-slate-700">{props.text}</h3>
              <p class="text-sm text-slate-400">
                {props.speakers?.length > 0 && "By"}   
                {props.speakers?.map((speaker, index) => (
                  <span key={index} className="">
                    {" " + speaker.name}
                    {index === props.speakers.length - 1
                      ? "."
                      : index === props.speakers.length - 2
                      ? " and "
                      : ", "}
                  </span>
                ))}
              </p>
            </header>
            <p>{displayedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
