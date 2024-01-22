import React, { useState, useEffect } from "react";
import ExecutiveCards from "./ExecutiveCards";
import { client } from '../../../../sanity/lib/client'
import Link from "next/link";

function Executives() {
  const [executives, setExecutives] = useState([]);
  useEffect(() => {
    const query = `*[_type == "executive"] | order(_createdAt asc) [0..5] {
      name,
      position,
      "imageUrl": image.asset->url,
      _createdAt
    }`;
    client.fetch(query)
      .then(data => {
        console.log("Fetched data:", data);
        const sortedExecutives = data.sort((a, b) => new Date(a._createdAt) - new Date(b._createdAt));
        setExecutives(sortedExecutives);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const facultyInCharge = executives.filter(
    (executive) => executive.position === "Faculty in Charge"
  );const otherExecutives = executives.filter(
    (executive) => executive.position !== "Faculty in Charge"
  );
  return (
    <div className="md:my-32 my-5">
      <h1 className="text-black md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
        EXECUTIVE MEMBERS
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {facultyInCharge.map((executive,index) => (
          <div key={executive.name}>
            <ExecutiveCards
              key={index}
              name={executive.name}
              position={executive.position}
              image={executive.imageUrl}
            />
          </div>
        ))}
        {otherExecutives.map((executive,index) => (
          <div key={executive.name}>
            <ExecutiveCards
              key={index}
              name={executive.name}
              position={executive.position}
              image={executive.imageUrl}
            />
          </div>
        ))}
      </div>
        <p className="text-right p-8 font-bold text-blue-900">
        <Link href="/executives">
          VIEW ALL
        </Link>
        </p>
    </div>
  );
}

export default Executives;
