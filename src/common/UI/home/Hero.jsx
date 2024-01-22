import React from "react";
// router
import { useRouter } from "next/router";
import Sait from "./Sait";
import Image from "next/image";
import SaitLogo from "../../../../public/logo masked.png";
import Herol from "../../../../public/assets/images/saithero.png";
import HeroMob from "../../../../public/assets/images/hero/hero_image.svg";
import HeroLogo1 from "../../../../public/assets/images/hero/main_logo_outer.svg";
import HeroLogo2 from "../../../../public/assets/images/hero/main_logo_inner.svg";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row justify-center w-screen gap-12">
      <div className="flex w-full justify-center self-start">
        <Image
          className="w-full xl:w-[50rem] lg:w-[35rem] md:w-[40rem]"
          src={HeroMob}
          alt=""
        />
      </div>
      <div className="px-4 sm:px-12 lg:px-0 text-[14px] md:text-xs lg:text-sm xl:text-[1rem] lg:w-2/3 w-full text-black md:flex flex-col justify-center sm:gap-12">
        {/* contents in hero page */}
        <div className="flex flex-col bg-white rounded-[10%] py-16">
          <p className="w-full leading-5 px-12">
            {/* The Department of Information Technology at Cochin University of
            Science and Technology, founded in 1995, is a dynamic hub of
            innovation. With a dedicated faculty at the forefront, we actively
            explore user-centric interfaces, delve into the complexities of
            cybersecurity, and venture into the realms of artificial
            intelligence, continuously pushing the boundaries of Information
            Technology. Our commitment to excellence and innovation remains
            unwavering as we navigate the ever-evolving landscape of IT,
            offering students a holistic education in cutting-edge technologies
            and practices. The Student Association of IT (SAIT) enriches the
            student experience through workshops, magazines, and technology
            projects. SAIT fosters collaboration, feedback, and student growth,
            creating a vibrant environment for students to learn, engage, and
            develop in the ever-evolving field of Information Technology. */}
            Founded in 1995, the Department of Information Technology at Cochin
            University of Science and Technology is a dynamic hub of innovation.
            Our dedicated faculty explores user-centric interfaces,
            cybersecurity, and artificial intelligence, pushing the boundaries
            of IT. Committed to excellence, we provide a holistic education in
            cutting-edge technologies. The Student Association of IT (SAIT)
            enhances student experience through workshops, magazines, and tech
            projects, fostering collaboration and creating a vibrant learning
            environment in the ever-evolving field of Information Technology.
          </p>
          <button
            onClick={() => {
              router.push("#upCommingEvents", undefined, { scroll: true });
            }}
            className="w-max ml-12 mt-6 px-14 py-2 hover:bg-blue-900 hover:text-white duration-500 border-2 border-blue-900 font-bold text-blue-900"
          >
            EXPLORE
          </button>
        </div>
        {/* end of contents */}
        <div className="bg-black p-12 rounded-[10%] flex justify-center relative sm:mt-0 mt-12">
          <Image className="w-3/6" src={HeroLogo2} alt="" />
          <Image className="animate-spin absolute bottom-5 left-[25%] z-20 w-3/6" src={HeroLogo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
