import React, { useState, useEffect } from "react";
import Image from "next/image";
import Event from "../../../../public/assets/images/events/hayya2.jpg";
import Img1 from "../../../../public/assets/images/events/hayya1.jpg";
import Img2 from "../../../../public/assets/images/events/EVENT 1.png";


export default function Carousel() {
  // Declare a state variable called "currentIndex" and set it to 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create an array of images that you want to display in the carousel
  const images = [
    { src: Event, alt: "Event" },
    { src: Img1, alt: "Event" },
    { src: Img2, alt: "Event" },
    { src: Img2, alt: "Event" },
  ];

  // Declare a function that will handle moving to the next image in the carousel
  const nextImage = () => {
    // If the current index is the last image, set the current index to 0
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      // Otherwise, increment the current index by 1
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Declare a function that will handle moving to the previous image in the carousel
  const prevImage = () => {
    // If the current index is the first image, set the current index to the last image
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      // Otherwise, decrement the current index by 1
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if(currentIndex < images.length - 1) 
      {
        setCurrentIndex(currentIndex + 1);
      }
      else{
        setCurrentIndex(0);
      }
    }, 3000);
  }, [currentIndex]);

  return (
    <div className="w-100 h-[500px] py-4 relative">
      <div className="flex">
      <Image
        src={images[currentIndex].src}
        alt="Current image"
        className=" h-[500px] w-1/2 px-3"
      />
      {currentIndex < images.length - 1 ? (
      <Image
        src={images[currentIndex+ 1 ].src}
        alt="Current image"
        className=" h-[500px] w-1/2 px-3"
      />
      ) : (
        <Image
        src={images[0].src}
        alt="Current image"
        className=" h-[500px] w-1/2 px-3"
      />
      )}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-0 bottom-10 m-4 p-4 rounded-full bg-white hover:bg-gray-200"
      >
        Pre
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 bottom-10 m-4 p-4 rounded-full bg-white hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
}
