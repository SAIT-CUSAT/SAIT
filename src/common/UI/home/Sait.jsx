import React from "react";

const Sait = (props) => {
  return (
    <div className="flex flex-col text-white mt-16 md:mt-3 ">
      
      <p className="self-end text-3xl mb-2 tracking-[7px] md:tracking-[10px]  font-bold ">
        {props.full}
      </p>
      
    </div>
  );
};

export default Sait;
