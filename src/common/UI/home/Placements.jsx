import React from "react";
import ActivityCards from "./ActivityCards";

function Placements() {
  return (
    <div className="md:h-[45rem]">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <div className="flex flex-col md:items-end">
        <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
          PLACEMENTS
        </h1>
          <p className="xl:w-1/4 w-full md:mb-0 mb-5 md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla luctus, nunc nisl aliquam nisl, eu aliquam nunc nisl
            eu.
          </p>
        </div>

        {/* cards */}
        <div className="flex items-center  md:flex-row flex-col md:absolute xl:-bottom-[13.9rem] lg:-bottom-[24rem] gap-y-3 md:left-14">
          <ActivityCards />
          <ActivityCards />
          <ActivityCards />
          <p className="self-center ml-6 font-bold text-blue-900 lg:text-center lg:pr-3">
            VIEW ALL PLACEMENTS -&gt;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Placements;
