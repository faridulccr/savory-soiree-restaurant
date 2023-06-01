// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";

const MySwiper = () => {
    return (
        <>
            <p className=" italic text-[#D99904] text-lg text-center mt-16">
                ---From 11:00am to 10:00pm---
            </p>
            <h2 className=" w-[424px] mx-auto border-y-4 mt-5 mb-12 font-['Inter'] text-4xl text-center py-4">
                ORDER ONLINE
            </h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default MySwiper;
