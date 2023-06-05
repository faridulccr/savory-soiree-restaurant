import FoodCard from "../../components/food-card/FoodCard";
import Heading from "../../components/heading/Heading";
import useMenu from "../../hooks/useMenu";

const RecommendSection = () => {
    const [loading, menu] = useMenu();
    const popular = menu.filter((item) => item.category === "popular");

    return (
        <>
            <Heading subHeading="Should Try" heading="CHEF RECOMMENDS" />
            <div className="grid px-5 xl:px-0 sm:grid-cols-3 justify-between gap-5 md:gap-10">
                {!loading &&
                    Array.isArray(popular) &&
                    popular.map((item) => (
                        <FoodCard
                            key={Math.random()}
                            image={item.image}
                            title={item.name}
                            description={item.recipe}
                            price={item.price}
                        />
                    ))}
            </div>
        </>
    );
};

export default RecommendSection;
