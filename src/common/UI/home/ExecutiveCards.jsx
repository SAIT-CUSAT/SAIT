import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Img1 from '../../../../public/assets/images/sampleimg.jpg'

function ExecutiveCards() {
  return (
    <div>
        {/* card with a image and name */}
        <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg w-64 h-[17rem]">
                <Image src={Img1} alt="" className="rounded-t-lg w-full h-48 object-cover"/>
                <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="text-gray-900 font-bold text-xl">John Doe</h1>
                    <h3 className="text-gray-600 font-medium">CEO</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExecutiveCards