import React from "react";
import Cards from "../../components/card.jsx";
import Link from "next/link";
import Bg from "../../../../public/bg-image.png";
import Up1 from "../../../../public/assets/images/events/up1.png";
import Up2 from "../../../../public/assets/images/events/up2.png";
import Up3 from "../../../../public/assets/images/events/up3.png";

const Upevent = () => {
  return (
    <div className="container h-full flex flex-col mx-auto my-14">
      <div className=" mx-auto text-center my-14">
        <h1 className="text-3xl font-bold text-blue-900 tracking-[1.5em] font-sans uppercase">
          Upcoming Events
        </h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <Cards
          img={Up1}
          text="Two Monts short term course in CAD & 3D printing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          
        />
        <Cards
          img={Up2}
          text="Two Monts short term course in CAD & 3D printing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          
        />
        <Cards
          img={Up3}
          text="Two Monts short term course in CAD & 3D printing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          
        />
        
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <Cards
          img={Up1}
          text="Two Monts short term course in CAD & 3D printing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          
        />
        <Cards
          img={Up2}
          text="Two Monts short term course in CAD & 3D printing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          
        />
        <Cards
          img={Up3}
          text="Two Monts short term course in CAD & 3D printing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          
        />
        
      </div>
      
    </div>
  );
};

export default Upevent;
