import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../providers/AuthProvider";

const useCart = () => {
    const { currentUser } = useAuth();
    const {
        refetch,
        isLoading,
        data: carts = [],
    } = useQuery({
        queryKey: ["carts", currentUser?.email],
        queryFn: async () => {
            const response = await fetch(
                `${import.meta.env.VITE_SAVORY_SERVER}/api/carts/${
                    currentUser?.email
                }`
            );
            // if (!response.ok) {
            //     throw new Error("Network response was not ok");
            // }
            return response.json();
        },
    });

    return [refetch, isLoading, carts];
};

export default useCart;
