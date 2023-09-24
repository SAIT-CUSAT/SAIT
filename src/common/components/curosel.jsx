import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import Image from "next/image";

const Carousel = ({ placements }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const intervalId = setInterval(() => {
      swiperInstance.slideNext();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Swiper
    className="w-full flex justify-center items-center"
      ref={swiperRef}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <div>
        {placements.map((company) => (
          <div key={company._id}>
            <SwiperSlide>
              <Image
                src={company.logoUrl}
                width={100}
                height={100}
                className="h-24 w-24 object-contain"
                alt="Image 1"
              />
            </SwiperSlide>
          </div>
        ))}
      </div>
    </Swiper>
  );
};

export default Carousel;
