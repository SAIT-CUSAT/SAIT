import { useRouter } from "next/router";
import React from "react";

export const Hostel_card = ({contact_number, location ,key, hostel_name, imageUrl}) => {
    const router = useRouter();
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl h-[29rem]">
        <figure>
          <img
            src={imageUrl}
            alt="Shoes"
            className="h-[20rem] w-full "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{hostel_name}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-between mt-6">
            <button onClick={()=>{
                // clicking it goes to a link
                router.push(`${location}`)

            }} className="btn btn-primary">View in maps</button>
            <button onClick={()=>{
                // clicking it goes to a link
                router.push(`tel:${contact_number}`)
            }} className="btn btn-primary">Call Now</button>    
          </div>
        </div>
      </div>
    </div>
  );
};
