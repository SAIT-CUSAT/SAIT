import React from "react";
import ActivityCards from "./ActivityCards";

function Placements() {
  return (
    <div className="h-[45rem]">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <div className="flex flex-col items-end">
          <h1 className="text-3xl font-bold tracking-[1.5em] font-sans uppercase mb-10">
            Placements
          </h1>
          <p className="w-1/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla luctus, nunc nisl aliquam nisl, eu aliquam nunc nisl
            eu.
          </p>
        </div>

        {/* cards */}
        <div className="flex absolute left-14 -bottom-[13.9rem]">
          <ActivityCards />
          <ActivityCards />
          <ActivityCards />
          <p className="self-center ml-6 font-bold text-blue-900">
            VIEW ALL PLACEMENTS -&gt;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Placements;
