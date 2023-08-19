import Cards from "../../components/card";
import Landing from "../events/Landing";
import Link from "next/link";
import Bg from "../../../../public/bg-image.png";

const UpcommingEvent = ({upCommingPost}) => {
  return (
    <div className="container flex flex-col mx-auto my-14">
      <div className=" mx-auto text-center my-6">
        <h1 className="md:text-3xl text-2xl font-bold text-blue-900 md:tracking-[1.5em] tracking-normal font-sans uppercase">
          Upcoming Events
        </h1>
      </div>
      <div className="pt-6 px-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {upCommingPost.length > 0 &&
          upCommingPost?.map((post,index) => (
            <Cards
              key={index}
              img={post.imageUrl1}
              text={post.title}
              para={post.description}
            />
          ))}
        {/* <Cards
            img={Bg}
            text="Two Monts short term course in CAD & 3D printing"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          />
          <Cards
            img={Bg}
            text="Two Monts short term course in CAD & 3D printing"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill"
          /> */}
      </div>
      <div className="text-end mr-10">
        <Link href="/event">
          <p className="uppercase text-blue-900 font-sans cursor-e-resize">
            view all events →
          </p>
        </Link>
      </div>
    </div>
  );
};

export default UpcommingEvent;
