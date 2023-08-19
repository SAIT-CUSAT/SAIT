import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img1 from "../../../../public/assets/images/sampleimg.jpg";

function ActivityCards({ title, description, img}) {
  console.log("title", title, "description", description)
  return (
    <div class="flex flex-col items-center py-2 max-w-[15rem] bg-white border-2 border-blue-900 shadow dark:bg-gray-800 dark:border-gray-700 mr-4">
      <Link href="#">
        <Image width={300} height={300} class="w-44" src={img} alt="" />
      </Link>
      <div class="p-5 text-center">
        <Link href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-400">
          {description && description.length > 50 ? `${description.slice(0, 70)}...` : description}
        </p>
      </div>
    </div>
  );
}

export default ActivityCards;
