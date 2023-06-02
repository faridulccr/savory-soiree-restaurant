import img from "../../assets/menu-item.png";

const MenuCards = ({ data }) => {
    return (
        <div className="grid md:grid-cols-2 gap-5 px-4 xl:px-0">
            {Array.isArray(data) &&
                data.map(({ id, name, description, price }) => (
                    <div
                        key={id}
                        className="grid grid-cols-[auto_1fr] items-center gap-5"
                    >
                        <img className="w-28 h-24" src={img} alt="" />
                        <div className="grid grid-cols-[1fr_auto] gap-0">
                            <div>
                                <h3 className=" uppercase font-['Cinzel'] font-semibold">
                                    {name} ------------------
                                </h3>
                                <p>{description}</p>
                            </div>
                            <p className="text-[#BB8506]">${price}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MenuCards;
