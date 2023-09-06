import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import UpcommingEvent from "./UpEvent";
import Activities from "./Activities";
import Placements from "./Placements";
import FeaturedAlumni from "./FeaturedAlumni";
import Executives from "./Executives";
import { client } from "../../../../sanity/lib/client";

const HomePage = () => {
  const [upCommingPost, setpost] = useState([]);
  const [ActivityPost, setActivityPost] = useState([]);
  useEffect(() => {
    const queryUpcomingEvent = `*[_type == "event" && status == "upcoming"] | order(startDate asc) [0...2] {
      _id,
      title,
      slug,
      "imageUrl1": images[0].asset->url,
      description,
      speakers,
      venue,
      startDate,
      endDate,
      status,
    }`;

    const queryActivity = `*[_type == "event" && status == "activity"] | order(startDate asc) {
      _id,
      title,
      slug,
      "imageUrl1": images[0].asset->url,
      description,
      speakers,
      venue,
      startDate,
      endDate,
      status,
    }`;

    // upcomming events
    client
      .fetch(queryUpcomingEvent)
      .then((data) => {
        console.log("Fetched data:", data);
        setpost(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // activities
    client
      .fetch(queryActivity)
      .then((data) => {
        console.log("Fetched data:", data);
        setActivityPost(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex flex-col">
      <Hero />
      {upCommingPost && upCommingPost.length > 0 && (
        <UpcommingEvent upCommingPost={upCommingPost} />
      )}
      {ActivityPost && ActivityPost.length > 0 && (
        <Activities ActivityPost={ActivityPost} />
      )}
      <Placements />
      <FeaturedAlumni />
      <Executives />
      {/* <Learningclub/> */}
    </div>
  );
};

export default HomePage;
