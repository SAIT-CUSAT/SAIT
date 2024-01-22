import React from "react";

export const Main_card = ({title,description,img,speakers,key}) => {
  return (
    <div>
      <div className="card md:w-60 lg:w-72 xl:w-80 bg-base-100 shadow-xl h-[24rem] xl:h-[29rem]">
        <figure className="w-full">
          <img
            src={img}
            alt="Shoes"
            className="h-[18rem] xl:h-[20rem] w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
