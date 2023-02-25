import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';


const Carousel = () => {
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
            ref={swiperRef}
            slidesPerView={5}
            loop={true}
        >
            <SwiperSlide>
                <img src="/company_logo/accenter.png" width={100} alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/amazon.png" width={100} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/wipro.png" width={100} alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/tcs.png" alt="Image 3" width={100} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/cognizant.png" alt="Image 3" width={100} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/ibm.png" alt="Image 3" width={100} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/infocys.png" alt="Image 3" width={100} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/mahindra.png" alt="Image 3" width={100} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/telecom.png" alt="Image 3" width={100} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/company_logo/concentric.png" alt="Image 3" width={100} />
            </SwiperSlide>

        </Swiper>
    );
};

export default Carousel;
