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
                    <h3 className=" text-slate-600 hidden sm:block text-3xl md:text-4xl text-center font-['Cinzel'] -mt-16 w-fit mx-auto">
                        SALADS
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className=" text-slate-600 hidden sm:block text-3xl md:text-4xl text-center font-['Cinzel'] -mt-16 w-fit mx-auto">
                        PIZZAS
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className=" text-slate-600 hidden sm:block text-3xl md:text-4xl text-center font-['Cinzel'] -mt-16 w-fit mx-auto">
                        SOUPS
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className=" text-slate-600 hidden sm:block text-3xl md:text-4xl text-center font-['Cinzel'] -mt-16 w-fit mx-auto">
                        CAKES
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className=" text-slate-600 hidden sm:block text-3xl md:text-4xl text-center font-['Cinzel'] -mt-16 w-fit mx-auto">
                        SALADS
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className=" text-slate-600 hidden sm:block text-3xl md:text-4xl text-center font-['Cinzel'] -mt-16 w-fit mx-auto">
                        SOUPS
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className=" text-slate-600 hidden sm:block text-3xl md:text-4xl text-center font-['Cinzel'] -mt-16 w-fit mx-auto">
                        PIZZAS
                    </h3>
                </SwiperSlide>
            </Swiper>

            <div className="mt-16 relative">
                <img
                    className="w-full h-[400px] sm:h-[500px]"
                    src={chefImg}
                    alt=""
                />
                <div className="w-11/12 sm:w-3/4 text-center py-10 sm:py-20 bg-white bg- absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="font-[400] font-['Cinzel'] mb-2 text-3xl text-[#151515]">
                        SAVORY SOIREE
                    </h3>
                    <p className=" px-2 sm:px-0 sm:w-2/3 mx-auto text-[#151515] font-['Inter']">
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
