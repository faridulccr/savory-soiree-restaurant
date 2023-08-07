import FoodCard from "../../components/food-card/FoodCard";

const TabCards = ({ menu }) => {
    return (
        <div className="grid px-5 xl:px-0 sm:grid-cols-3 justify-between gap-5 md:gap-10 mt-10">
            {Array.isArray(menu) &&
                menu.map((item) => (
                    <FoodCard
                        key={Math.random()}
                        image={item.image}
                        name={item.name}
                        description={item.recipe}
                        price={item.price}
                        cartId={item._id}
                    />
                ))}
        </div>
    );
};

export default TabCards;
