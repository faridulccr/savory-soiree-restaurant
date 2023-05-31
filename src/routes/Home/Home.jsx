import useTitle from "../../hooks/useTitle";
import MyCarousel from "./MyCarousel";

const Home = () => {
    useTitle("home");
    return (
        <>
            <MyCarousel />
            <div>
                <h1 className="text-3xl font-bold underline">Home</h1>
            </div>
        </>
    );
};

export default Home;
