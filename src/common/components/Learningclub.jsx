const Learningclub = () => {
    return (  

        <div  style={{
            backgroundImage: `url('/assets/images/learningclubf.jpg')`,
             height: "82vh",width: "100%",backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat ", 
            }} 
            className="mt-2 brightness-100 md:bg-cover md:bg-center h-screen md:h-80 py-10 md:py-24 px-5 md:px-10 text-white flex flex-col justify-center items-center">
                  <div class="">
                  <h1 class="w-full flex  text-center text-3xl tracking-widest font-bold">  <p >L E A R N I N G C L U B</p></h1>
               
                  </div>
               

                <div class="flex flex-col justify-center items-center m-20">
                <h6 class="justify-center items-center content-center text-white  text-sm  sm:mr-20 2xl:ml-24  "> Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Expedita
                 magni voluptatum in vel similique adipisci illum dicta sunt nisi
                 consectetur adipisicing elit. Expedita
                 consectetur adipisicing elit.
                 magni voluptatum in vel similique adipisci illum dicta sunt nisi
                 consectetur adipisicing elit
               
               </h6>
                 </div>

                <div class="justify-center ">
                <button className="bg-blue-800 mr-4 font-bold py-2 px-4  mt-4 md:mt-8 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white w-48">
                    Register
                </button>
                <button className="bg-white ml-4 text-blue-800 font-bold py-2  px-4  mt-4 md:mt-8 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white w-48">
                    Know More
                </button>
                </div>

            </div>
            
            
    );
}
 
export default Learningclub;