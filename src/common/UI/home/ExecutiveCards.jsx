import React from 'react';
import Image from 'next/image'

function ExecutiveCards({name,position,image,key}) {
  return (
    <div key={key}>
        <div className="card w-60 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="h-[15rem] w-full " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <p>{position}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ExecutiveCards