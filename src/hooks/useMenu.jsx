import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const { isLoading, data: menu = [] } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const response = await fetch(
                `${import.meta.env.VITE_SAVORY_SERVER}/api/menu`
            );
            // if (!response.ok) {
            //     throw new Error("Network response was not ok");
            // }
            return response.json();
        },
    });

    return [isLoading, menu];
};

export default useMenu;
