import { useQuery } from "@tanstack/react-query";

const useReview = () => {
    const { isLoading, data: reviews = [] } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const response = await fetch(
                `${import.meta.env.VITE_SAVORY_SERVER}/api/reviews`
            );
            // if (!response.ok) {
            //     throw new Error("Network response was not ok");
            // }
            return response.json();
        },
    });

    return [isLoading, reviews];
};

export default useReview;
