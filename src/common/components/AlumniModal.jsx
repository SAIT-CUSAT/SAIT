import React from "react";
import Image from "next/image";
const AlumniModal = ({ alumni, onClose }) => {
  console.log(alumni);
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="bg-white w-1/2 flex flex-col rounded-lg p-6">
        {/* <button className="flex justify-end font-bold text-red-400">X</button> */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start p-3">
          <Image
            width={100}
            height={100}
            src={alumni.imageUrl}
            alt={alumni.name}
            className="w-56 rounded-xl object-contain"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold mb-4">{alumni.name}</h2>
            <p className="text-gray-600 mb-2">{alumni.yearOfPassout} batch</p>
            <p className="text-gray-600 mb-2">{alumni.designation}</p>
            <p className="text-gray-600">at {alumni.company}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-6">{alumni.bio}</p>
      </div>
    </div>
  );
};

export default AlumniModal;
