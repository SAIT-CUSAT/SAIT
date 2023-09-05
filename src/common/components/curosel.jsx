import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";

const Carousel = () => {
  const companies = [
    {
      id: 1,
      name: "Cognizant Technology solution",
      dept: "information technology",
      logo: "/company_logo/cognizant.png",
      jobs: 784,
    },
    {
      id: 2,
      name: "accenture",
      dept: "information technology",
      logo: "/company_logo/accenter.png",
      jobs: 254,
    },
    {
      id: 3,
      name: "concentrix",
      dept: "information technology",
      logo: "/company_logo/concentric.png",
      jobs: 124,
    },
    {
      id: 4,
      name: "Tata consultancy services (TCS)",
      dept: "information technology",
      logo: "/company_logo/tcs.png",
      jobs: 654,
    },
    {
      id: 5,
      name: "Wipro",
      dept: "information technology",
      logo: "/company_logo/wipro.png",
      jobs: 95,
    },
    {
      id: 6,
      name: "Infoys",
      dept: "information technology",
      logo: "/company_logo/infocys.png",
      jobs: 562,
    },
    {
      id: 5,
      name: "ibm",
      dept: "information technology",
      logo: "/company_logo/ibm.png",
      jobs: 320,
    },
    {
      id: 8,
      name: "tech mahindra",
      dept: "information technology",
      logo: "/company_logo/mahindra.png",
      jobs: 80,
    },
    {
      id: 9,
      name: "amacon.com",
      dept: "Retail and wholesale",
      logo: "/company_logo/amazon.png",
      jobs: 61,
    },
    {
      id: 10,
      name: "Teleperformance",
      dept: "Telecommunications",
      logo: "/company_logo/telecom.png",
      jobs: 154,
    },
  ];
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
      {companies.map((company) => (
        <div key={company.id}>
            <SwiperSlide>
                <img src={company.logo} width={100} alt="Image 1" />
            </SwiperSlide>
        </div>  
      ))}
    </Swiper>
  );
};

export default Carousel;
