import React from "react";
import Image from "next/image";
const AlumniCard = ({ title, img, company, designation, key }) => {
  const displayedText =
    title.length > 15 ? `${title.slice(0, 15)}...` : title;
  return (
    <div className="transform transition-transform hover:scale-110 duration-500 rounded-lg shadow-xl">
      <div className="card w-72 bg-base-100 shadow-xl h-[25rem]">
        <figure>
          <img src={img} alt="Shoes" className="h-[15rem] w-full " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{title}</h2>
          <p>{designation}</p>
          <p>{company}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
