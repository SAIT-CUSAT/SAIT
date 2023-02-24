import Cards from "../../components/card";
import Landing from "../events/Landing";
import Link from "next/link";

const UpcommingEvent = () => {
    return (
        <div className="container h-full flex flex-col mx-auto my-14">
            <div className=' mx-auto text-center my-14'>
                <h1
                    className='text-3xl font-bold text-blue-900 tracking-[1.5em] font-sans uppercase'
                >
                    Upcoming Events
                </h1>
            </div>
            <div
                className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
            >
                <Cards />
                <Cards />
                <Cards />
            </div>
            <div className="text-end mr-10">
                <Link href='/event'>
                    <p className="uppercase text-blue-900 font-sans cursor-e-resize">
                        view all events →
                    </p>
                </Link>
            </div>

        </div>
    );
}

export default UpcommingEvent;