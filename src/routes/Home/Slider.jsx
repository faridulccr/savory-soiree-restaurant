import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import chefImg from "../../assets/home/chef-service.jpg";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import Heading from "../../components/heading/Heading";

const Slider = () => {
    return (
        <>
            <Heading text="From 11:00am to 10:00pm" title="ORDER ONLINE" />
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
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
                    <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                </SwiperSlide>
            </Swiper>

            <div className="mt-16 relative">
                <img className="w-full h-full" src={chefImg} alt="" />
                <div className="w-3/4 text-center py-20 bg-white bg- absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="font-[400] font-['Cinzel'] mb-2 text-3xl text-[#151515]">
                        SAVORY SOIREE
                    </h3>
                    <p className="w-2/3 mx-auto text-[#151515] font-['Inter']">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus, libero accusamus laborum deserunt
                        ratione dolor officiis praesentium! Deserunt magni
                        aperiam dolor eius dolore at, nihil iusto ducimus
                        incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Slider;
