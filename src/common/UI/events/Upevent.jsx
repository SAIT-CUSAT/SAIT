import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getData } from "../../../features/counter/counterSlice.js";
import Card from "../home/Card.jsx";
// import Bg from "../../../../public/bg-image.png";
// import Up1 from "../../../../public/assets/images/events/up1.png";
// import Up2 from "../../../../public/assets/images/events/up2.png";
// import Up3 from "../../../../public/assets/images/events/up3.png";

const Upevent = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className="container h-full flex flex-col mx-auto my-14">
      <div className=" mx-auto text-center my-14">
        <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
          UPCOMING EVENTS
        </h1>
      </div>
      <div className="p-5 w-full grid justify-items-center mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data?.map((event, index) => (
          <Link
            href="/eventdata"
            key={event._id}
            onClick={() => dispatch(getData(event))}
          >
            <Card
              key={index}
              img={event.images[0]}
              title={event.title}
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Upevent;
