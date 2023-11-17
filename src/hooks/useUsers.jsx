import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../providers/AuthProvider";

const useUsers = () => {
    const { currentUser } = useAuth();
    const {
        refetch,
        isLoading,
        data: users = [],
    } = useQuery({
        queryKey: ["users", currentUser?.email],
        queryFn: async () => {
            const response = await fetch(
                `${import.meta.env.VITE_SAVORY_SERVER}/api/users`
            );
            return response.json();
        },
    });

    return [refetch, isLoading, users];
};

export default useUsers;
