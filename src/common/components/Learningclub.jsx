const Learningclub = () => {
    return (

        <div style={{
             backgroundImage: `url('/assets/images/learningclubf.jpg')`,
             height: "82vh", width: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat ",
             }}
            className="mt-2 brightness-100 md:bg-cover md:bg-center h-screen md:h-80 py-10 md:py-24 px-5 md:px-10 text-white flex flex-col justify-center items-center">
           
            <div class="">
                <h1 class="text-center text-3xl tracking-[1.2em] font-bold">  <p>LEARNING  CLUB</p></h1>
            </div>


            <div class="flex flex-col justify-center items-center m-20">

                <p class="text-white-700 text-base text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>

            </div>



            <div class="justify-center ">
                <button class="bg-blue-800  font-bold font-semibold hover:bg-stone-200 transition duration-300 ease-in-out  hover:text-blue-900 py-1 mx-2 px-14  border border-stone-200 ">
                    Register
                </button>
                <button class="bg-white text-blue-800 font-bold font-semibold transition duration-300 ease-in-out hover:bg-stone-200 hover:bg-blue-800 hover:text-white py-1 mr-2 px-14 border border-stone-200 ">
                    know more
                </button>
            </div>

        </div>


    );
}

export default Learningclub;