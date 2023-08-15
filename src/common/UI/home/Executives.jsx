import React from "react";
import ExecutiveCards from "./ExecutiveCards";

function Executives() {
  return (
    <div className=" md:my-0 my-5">
      <h1 className="md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
        EXECUTIVE MEMBERS
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <ExecutiveCards />
        <ExecutiveCards />
        <ExecutiveCards />
        <ExecutiveCards />
      </div>
      <p className="text-right p-8 font-bold text-blue-900">VIEW ALL -&gt;</p>
    </div>
  );
}

export default Executives;
