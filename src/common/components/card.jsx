import React from 'react';
import Image from 'next/image';
const Cards = (props) => {
    const displayedText = props.para.length > 50 ? `${props.para.slice(0, 70)}...` : props.para;
    return (
        <div class="rounded border-2 overflow-hidden shadow-lg border-blue-900 flex flex-col justify-center items-center">
            <Image width={300} height={300} class="" src={props.img} alt="Mountain" />
            <div class="px-6 py-3">
                <div class="font-semibold text-center text-blue-900 text-xl lg:my-3 lg:pb-0">
                    {props.text}
                </div>
                <p class="text-gray-700 text-base text-center">
                    {displayedText}
                </p>
            </div>
        </div>
    );
}

export default Cards;