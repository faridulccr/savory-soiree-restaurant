import { useEffect, useState } from "react";

const useMenu = () => {
    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("menu.json");
            const data = await res.json();
            // console.log(data);
            setMenu(data);
            setLoading(false);
        };
        getData();
    }, []);

    return [loading, menu];
};

export default useMenu;
