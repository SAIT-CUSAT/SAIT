import React from "react";

const Sait = (props) => {
  return (
    <div className="flex text-white mt-16 md:mt-3">
      <div className="text-center w-20">
        <h1 className="text-6xl md:text-8xl font-bold">{props.letter}</h1>
      </div>
      <p className="self-end text-sm md:text-xl mb-2 tracking-[7px] md:tracking-[10px] md:mx-2 font-semibold">
        {props.full}
      </p>
    </div>
  );
};

export default Sait;
