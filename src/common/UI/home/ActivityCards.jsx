import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img1 from "../../../../public/assets/images/sampleimg.jpg";

function ActivityCards() {
  return (
    <div class="max-w-[20rem] bg-white border-2 border-blue-900 shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <Image class="" src={Img1} alt="" />
      </Link>
      <div class="p-5 text-center">
        <Link href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum dolor sit ame
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringill
        </p>
      </div>
    </div>
  );
}

export default ActivityCards;
