const Learningclub = () => {
    return (  

        <div  style={{
            backgroundImage: `url('/assets/images/learningclubf.jpg')`,
             height: "82vh",width: "100%",backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat ", 
            }} 
            className="mt-2 brightness-100 md:bg-cover md:bg-center h-screen md:h-80 py-10 md:py-24 px-5 md:px-10 text-white flex flex-col justify-center items-center">
                  <div class="">
                  <h1 class="text-center text-3xl tracking-[1.2em] font-bold">  <p>LEARNING  CLUB</p></h1>
               
                  </div>
               

                <div class="flex flex-col justify-center items-center m-20">
                {/* <h6 class="justify-center items-center content-center text-white  text-sm  sm:mr-20 2xl:ml-24  "> Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Expedita
                 magni voluptatum in vel similique adipisci illum dicta sunt nisi
                 consectetur adipisicing elit. Expedita
                 consectetur adipisicing elit.
                 magni voluptatum in vel similique adipisci illum dicta sunt nisi
                 consectetur adipisicing elit
               
               </h6> */}
               <p class="text-white-700 text-base text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                 </div>

                {/* <div class="justify-center ">
                <button className="bg-blue-800 mr-4 font-bold py-2 px-4  mt-4 md:mt-8 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white w-48">
                    Register
                </button>
                <button className="bg-white ml-4 text-blue-800 font-bold py-2  px-4  mt-4 md:mt-8 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white w-48">
                    Know More
                </button>
                </div> */}

                        <div class="justify-center ">
                            <button class="bg-blue-800  font-bold font-semibold hover:bg-stone-200   hover:text-blue-900 py-1 mx-2 px-14  border border-stone-200 ">
                                Register
                            </button>
                            <button class="bg-white text-blue-800 font-bold font-semibold hover:bg-stone-200 hover:bg-blue-800 hover:text-white py-1 mx-2 px-14 border border-stone-200 ">
                                know more
                            </button>
                        </div>

            </div>
            
            
    );
}
 
export default Learningclub;