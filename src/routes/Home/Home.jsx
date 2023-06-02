import useTitle from "../../hooks/useTitle";
import FeaturedItem from "./FeaturedItem";
import MenuSection from "./MenuSection";
import MyCarousel from "./MyCarousel";
import RecommendSection from "./RecommendSection";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

const Home = () => {
    useTitle("Home");
    return (
        <>
            <MyCarousel />
            <Slider />
            <MenuSection />
            <RecommendSection />
            <FeaturedItem />
            <Testimonial />
        </>
    );
};

export default Home;
