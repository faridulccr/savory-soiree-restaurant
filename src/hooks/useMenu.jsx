import { useEffect, useState } from "react";

const useMenu = (category) => {
    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("menu.json");
            const data = await res.json();
            // console.log(data);

            if (category === "all") {
                setMenu(data);
            } else if (category) {
                const findMenuByCategory = data.filter(
                    (item) =>
                        String(item.category).toLowerCase() ===
                        String(category).toLowerCase()
                );
                setMenu(findMenuByCategory);
            }
            setLoading(false);
        };
        getData();
    }, [category]);

    return [loading, menu];
};

export default useMenu;
