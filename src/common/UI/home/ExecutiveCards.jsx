import React from 'react';
import Image from 'next/image'

function ExecutiveCards({name,position,image,key}) {
  return (
    <div key={key}>
        {/* card with a image and name */}
        <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg w-[225px] h-[350px]">
                <Image src={image} alt="" width={400} height={200} className="object-top rounded-t-lg w-full h-[270px] object-cover"/>
                <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="text-gray-900 font-bold text-xl">{name}</h1>
                    <h3 className="text-gray-600 font-medium">{position}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExecutiveCards