import React from "react";
import Sait from "./Sait";
import Image from "next/image";
import SaitLogo from "../../../../public/logo masked.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen relative overflow-x-hidden ">
        <Image className="absolute w-24 md:w-32 -right-12 lg:left-[43.5%] xl:left-[45.5%] top-[30%]" src={SaitLogo} alt="" />
      <div className="  w-full md:w-1/2 flex md:justify-center md:items-center h-5/6 bg-[#0D2E8E] skew-x-17">
        <div className="h-1/2">
          <Sait full="STUDENT" />
          <Sait full="ASSOCIATION OF" />
          <Sait full="INFORMATION" />
          <Sait full="TECHNOLOGY" />
        </div>
      </div>
      <div className=" relative p-16 w-full text-xs md:text-[14px]  md:w-1/2 text-black md:flex flex-col md:justify-center md:items-center h-5/6">
        <Image className="block md:hidden absolute w-24 md:w-32 -left-12 md:left-[45.5%] top-[40%] md:top-[30%]" src={SaitLogo} alt="" />
        <p className="w-5/6 md:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          magni voluptatum in vel similique adipisci illum dicta sunt nisi
          consequatur perferendis dolor libero dignissimos magnam veritatis
          accusantium soluta exercitationem at, perspiciatis ducimus fuga quia
          optio.
        </p>
        <div className="w-5/6 md:w-3/4 mt-9 ml-10 md:ml-20">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            magni voluptatum in vel similique adipisci illum dicta sunt nisi
            consequatur perferendis dolor libero dignissimos magnam veritatis
            accusantium soluta exercitationem at, perspiciatis ducimus fuga quia
            optio.
          </p>
          <button className="px-9 mt-10 py-1.5 border-2 rounded-md border-blue-900 font-bold text-blue-900">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
