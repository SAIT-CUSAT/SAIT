const Cards = () => {
    return (
        <div class="rounded border-2 overflow-hidden shadow-lg border-blue-900">
            <img class="w-full" src="/bg-image.png" alt="Mountain" />
            <div class="px-6 py-4">
                <div class="font-semibold text-center text-blue-900 text-3xl mb-14">
                    Two months Short term course in CAD & 3D Printing
                </div>
                <p class="text-gray-700 text-base text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
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