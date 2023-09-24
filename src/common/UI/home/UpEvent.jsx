import Card from "./Card.jsx";
import Link from "next/link";

const UpcommingEvent = ({ upCommingPost }) => {
  console.log(upCommingPost);
  return (
    <div id="upCommingEvents" className="container flex flex-col mx-auto my-14">
      <div className=" mx-auto text-center my-6">
        <h1 className="md:text-3xl text-2xl font-bold text-blue-900 md:tracking-[1.5em] tracking-normal font-sans uppercase">
          Upcoming Events
        </h1>
      </div>
      <div className="pt-6 px-3 flex flex-col items-center md:flex-row flex-wrap gap-2">
        {upCommingPost.length > 0 &&
          upCommingPost?.map((post, index) => (
            <Card
              key={index}
              img={post.imageUrl1}
              title={post.title}
              para={post.description}
              speakers={post.speakers}
            />
          ))}
      </div>
      <div className="text-end mr-10">
        <Link href="/events">
          <p className="uppercase mt-8 text-blue-900 font-sans font-bold cursor-pointer">
            view all events
          </p>
        </Link>
      </div>
    </div>
  );
};

export default UpcommingEvent;
