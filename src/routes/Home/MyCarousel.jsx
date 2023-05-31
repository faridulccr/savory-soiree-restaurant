import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../../assets/home/01.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";
import img1 from "../../assets/home/07.jpg";

const MyCarousel = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
                <div className="h-full lg:h-[550px]">
                    <img className="h-full" src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="h-full lg:h-[550px]">
                    <img className="h-full" src={img2} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="h-full lg:h-[550px]">
                    <img className="h-full" src={img3} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="h-full lg:h-[550px]">
                    <img className="h-full" src={img4} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="h-full lg:h-[550px]">
                    <img className="h-full" src={img5} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="h-full lg:h-[550px]">
                    <img className="h-full" src={img6} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default MyCarousel;
