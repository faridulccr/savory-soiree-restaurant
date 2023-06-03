import "./MenuCards.css";

const MenuCards = ({ menu }) => {
    return (
        <div className="grid md:grid-cols-2 gap-5 px-4 xl:px-0">
            {Array.isArray(menu) &&
                menu.map(({ _id, name, recipe, image, price }) => (
                    <div
                        key={_id}
                        className="grid xs:grid-cols-[auto_1fr] items-center gap-5 mb-10 xs:mb-0"
                    >
                        <img
                            className=" w-3/4 xs:w-28 h-auto xs:h-24 rounded xs:rounded-tl-none xs:rounded-tr-[50%] xs:rounded-br-[50%] xs:rounded-bl-[50%] mx-auto block"
                            src={image}
                            alt=""
                        />
                        <div className="grid grid-cols-[1fr_auto] gap-0">
                            <div>
                                <h3 className=" uppercase font-['Cinzel'] font-semibold">
                                    {name} ------------------
                                </h3>
                                <p>{recipe}</p>
                            </div>
                            <p className="text-[#BB8506]">${price}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MenuCards;
