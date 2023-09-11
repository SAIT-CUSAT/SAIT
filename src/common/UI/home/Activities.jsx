import React from "react";
import ActivityCards from "./Card";
import Link from "next/link";

function Activities({ ActivityPost }) {
  console.log(ActivityPost);
  return (
    <div className="md:h-[45rem] my-7">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
          ACTIVITIES
        </h1>
        <p className="xl:w-[30rem] w-full">
          Our past events list showcases a dynamic array of activities. From
          informative seminars to engaging tech competitions, these gatherings
          brought together students, faculty, and industry experts for knowledge
          sharing and community building. They inspire us to continue shaping
          our department&apos;s future through meaningful experiences for our
          students.
        </p>

        {/* cards */}
        <div className="flex items-center md:flex-row flex-col md:absolute md:right-4 xl:-bottom-[20rem] lg:-bottom-[24rem] gap-y-3">
          <Link
            href={"/events"}
            className="self-center mr-6 font-bold text-blue-900 lg:text-center ml-3"
          >
            VIEW ALL ACTIVITIES -&gt;
          </Link>

          {ActivityPost.map((activity, index) => (
            <ActivityCards
              key={index}
              title={activity.title}
              description={activity.description}
              img={activity.imageUrl1}
              speakers={activity.speakers}
            />
          ))}

          {/* <ActivityCards />
          <ActivityCards /> */}
        </div>
      </div>
    </div>
  );
}

export default Activities;
