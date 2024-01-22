import React from "react";
import Image from "next/image";
const FeaturedAlumniCard = ({ title, description, img }) => {
  const displayedText =
    description?.length > 25 ? `${description.slice(0, 70)}...` : description;
  const displayedName =
    title?.length > 15 ? `${title.slice(0, 15)}...` : title;
  return (
    <div>
    <div className="card w-72 bg-base-100 shadow-xl h-[24rem]">
      <figure className="h-[18rem]">
        <img
          src={img}
          alt="Shoes"
          className="h-full w-full "
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

export default FeaturedAlumniCard;
