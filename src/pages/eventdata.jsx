import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
const EventsData = () => {
  const event = useSelector((state) => state.counter.event);
  const eventImages = event.images;
  return (
    <div>
      <section className="bg-white ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold uppercase   text-gray-900 ">
              {event.title}
            </h2>
            <p className="mb-4 font-medium">
              {event.description}
            </p>
            <p className="mb-4 font-medium"> 
              dates: {event.startDate} &nbsp; to &nbsp; {event.endDate}
            </p>
            <p className="mb-4 font-medium">Venue: {event.venue}</p>
            <p className="mb-0 font-medium">speakers: {event.speakers?.map((speaker,index)=>(
              <Link target="_blank" href={speaker.socialProfileUrl} key={index}>
                {speaker.name} &nbsp;
              </Link>
            ))}</p>
          </div>
          <br />
          <div className="flex flex-wrap gap-10">
            {eventImages?.map((image, index) => (
              <div key={index}>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsData;
