import React from "react";
import ActivityCards from "./ActivityCards";

function Activities() {
  return (
    <div className="h-[45rem]">
      <div className="bg-blue-900 py-20 px-8 text-white relative">
        <h1 className="text-3xl font-bold tracking-[1.5em] font-sans uppercase mb-10">
          ACTIVITIES
        </h1>
        <p className="w-1/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla luctus, nunc nisl aliquam nisl, eu aliquam nunc nisl eu.
        </p>

        {/* cards */}
        <div className="flex absolute right-14 -bottom-[13.9rem]">
          <p className="self-center mr-6 font-bold text-blue-900">VIEW ALL ACTIVITIES -&gt;</p>
          <ActivityCards />
          <ActivityCards />
          <ActivityCards />
        </div>
      </div>
    </div>
  );
}

export default Activities;
