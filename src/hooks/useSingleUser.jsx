import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../providers/AuthProvider";

const useSingleUser = () => {
    const { currentUser } = useAuth();
    const { isLoading, data: user = {} } = useQuery({
        queryKey: ["user", currentUser?.email],
        queryFn: async () => {
            const response = await fetch(
                `${import.meta.env.VITE_SAVORY_SERVER}/api/user/${
                    currentUser?.email
                }`
            );
            return response.json();
        },
    });

    return [isLoading, user];
};

export default useSingleUser;
