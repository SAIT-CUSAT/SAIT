import React from "react";
import Image from "next/image";
import Event from "../../../../public/assets/images/events/event pic.png";
import Text from "../../../../public/assets/images/events/Group 10.png";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-1/2  relative">
          <Image
            className="hidden md:block w-full h-11/12 xl:w-[48rem] lg:w-[55rem] md:w-[40rem]"
            src={Event}
            alt=""
          />
          <Image
            className="absolute bottom-5 right-10 hidden md:block w-full xl:w-[48rem] lg:w-[20rem] md:w-[40rem]"
            src={Text}
            alt=""
          />
        </div>
        <div className="w-1/2 m-10 flex flex-col justify-center items-center">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            magni voluptatum in vel similique adipisci illum dicta sunt nisi
            consequatur perferendis dolor libero dignissimos magnam veritatis
            accusantium soluta exercitationem at, perspiciatis ducimus fuga quia
            optio.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita magni voluptatum in vel similique adipisci illum dicta sunt
            nisi consequatur perferendis dolor libero dignissimos magnam
            veritatis accusantium soluta exercitationem at, perspiciatis ducimus
            fuga quia optio.
          </p>
          <p className="ml-10 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            magni voluptatum in vel similique adipisci illum dicta sunt nisi
            consequatur perferendis dolor libero dignissimos magnam veritatis
            accusantium soluta exercitationem at, perspiciatis ducimus fuga quia
            optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            magni voluptatum in vel similique adipisci illum dicta sunt nisi
            consequatur perferendis dolor libero dignissimos magnam veritatis
            accusantium soluta exercitationem at, perspiciatis ducimus fuga quia
            optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
