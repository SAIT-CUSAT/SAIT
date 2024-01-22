import React, { useState, useEffect } from "react";
import ExecutiveCards from "../common/UI/home/ExecutiveCards";
import { client } from "../../sanity/lib/client";
const ExecutivesPage = () => {
  const [executives, setExecutives] = useState([]);
  useEffect(() => {
    const query = `*[_type == "executive"] {
      name,
      position,
      "imageUrl": image.asset->url,
      _createdAt
    }`;
    client
      .fetch(query)
      .then((data) => {
        console.log("Fetched data:", data);
        const sortedExecutives = data.sort(
          (a, b) => new Date(a._createdAt) - new Date(b._createdAt)
        );
        setExecutives(sortedExecutives);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const facultyInCharge = executives.filter(
    (executive) => executive.position === "Faculty in Charge"
  );
  const otherExecutives = executives.filter(
    (executive) => executive.position !== "Faculty in Charge"
  );
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-black md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
        EXECUTIVE BOARD 2023-24
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {facultyInCharge.map((executive) => (
          <div className="flex-1/4" key={executive.name}>
            <ExecutiveCards
              name={executive.name}
              position={executive.position}
              image={executive.imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {otherExecutives.map((executive) => (
          <div className="flex-1/4" key={executive.name}>
            <ExecutiveCards
              name={executive.name}
              position={executive.position}
              image={executive.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutivesPage;
