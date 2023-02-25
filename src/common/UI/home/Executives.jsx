import React from "react";
import ExecutiveCards from "./ExecutiveCards";

function Executives() {
  return (
    <div className="h-[40rem]">
      <h1 className="text-3xl text-center font-bold tracking-[1.5em] font-sans uppercase mb-10">
        EXECUTIVE MEMBERS
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <ExecutiveCards />
        <ExecutiveCards />
        <ExecutiveCards />
        <ExecutiveCards />
        <ExecutiveCards />
      </div>
      <p className="text-right p-8 font-bold text-blue-900">
        VIEW ALL -&gt;
      </p>
    </div>
  );
}

export default Executives;
