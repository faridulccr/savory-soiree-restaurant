import useTitle from "../../hooks/useTitle";
import MyCarousel from "./MyCarousel";
import Slider from "./Slider";

const Home = () => {
    useTitle("Home");
    return (
        <>
            <MyCarousel />
            <Slider />
        </>
    );
};

export default Home;
