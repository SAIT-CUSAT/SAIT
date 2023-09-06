import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import Image from "next/image";

const Carousel = ({placements}) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const intervalId = setInterval(() => {
      swiperInstance.slideNext();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Swiper ref={swiperRef} slidesPerView={5} loop={true}>
      <div >
        {placements.map((company) => (
          <div key={company._id}>
              <SwiperSlide>
                  <Image src={company.logoUrl} width={100} height={100} className="h-24 w-24 object-contain" alt="Image 1" />
              </SwiperSlide>
          </div>  
        ))}
      </div>
    </Swiper>
  );
};

export default Carousel;
