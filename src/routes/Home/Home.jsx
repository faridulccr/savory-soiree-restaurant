import useTitle from "../../hooks/useTitle";
import MyCarousel from "./MyCarousel";
import MySwiper from "./MySwiper";

const Home = () => {
    useTitle("Home");
    return (
        <>
            <MyCarousel />
            <MySwiper />
        </>
    );
};

export default Home;
