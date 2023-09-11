import React from "react";
import Image from "next/image";
import Event from "../../../../public/assets/images/events/event pic.png";
import Text from "../../../../public/assets/images/events/Group 10.png";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center md:flex-row flex-col">
        <div className="w-1/2 h-max  relative">
          <Image
            className=" w-full h-full md:h-11/12 xl:w-[48rem] lg:w-[55rem] md:w-[40rem]"
            src={Event}
            alt=""
          />
          <Image
            className="absolute bottom-5 right-10 hidden md:block w-full xl:w-[30rem] lg:w-[20rem] md:w-[40rem]"
            src={Text}
            alt=""
          />
        </div>
        <div className="md:w-1/2 m-10 flex flex-col justify-center items-center">
          <p className="">
            Experience the vibrancy of our Information Technology department
            through a diverse range of events, meticulously organized by the
            Students Association of Information Technology (SAIT) in
            collaboration with our department. These events are carefully
            curated to provide students with a holistic learning experience,
            blending education, innovation, and networking. From hackathons that
            challenge your problem-solving abilities to seminars featuring
            industry leaders who share their expertise, our events are a gateway
            to a world of knowledge and opportunities.
          </p>
          <p className="ml-10 my-5 hidden lg:block">
            We also offer hands-on workshops and practical sessions, ensuring
            that students remain at the forefront of technological advancements.
            Whether you&apos;re a student seeking to expand your horizons or an
            industry professional looking to connect with emerging talent, our
            events offer a platform for growth and engagement. Join us in our
            exciting IT journey and stay updated on our upcoming events!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
