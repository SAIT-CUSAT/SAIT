import React from "react";
import ActivityCards from "./Card";

function Activities({ ActivityPost }) {
  console.log(ActivityPost);
  return (
    <div className="md:h-[45rem] my-7">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
          ACTIVITIES
        </h1>
        <p className="xl:w-1/4 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla luctus, nunc nisl aliquam nisl, eu aliquam nunc nisl eu.
        </p>

        {/* cards */}
        <div className="flex items-center md:flex-row flex-col md:absolute md:right-0 xl:-bottom-[13.9rem] lg:-bottom-[24rem] gap-y-3">
          <p className="self-center mr-6 font-bold text-blue-900 lg:text-center ml-3">
            VIEW ALL ACTIVITIES -&gt;
          </p>

          {ActivityPost.map((activity,index) => (
            <ActivityCards
              key={index}
              title={activity.title}
              description={activity.description}
              img={activity.imageUrl1}
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
