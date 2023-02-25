import React from 'react';
import Image from 'next/image';
const Cards = (props) => {
    return (
        <div class="rounded border-2 overflow-hidden shadow-lg border-blue-900">
            <Image class="w-full" src={props.img} alt="Mountain" />
            <div class="px-6 py-4">
                <div class="font-semibold text-center text-blue-900 text-xl lg:text-3xl lg:mb-14 pb-7 lg:pb-0">
                    {props.text}
                </div>
                <p class="text-gray-700 text-base text-center">
                    {props.para}
                </p>
            </div>
            {/* <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>
    );
}

export default Cards;