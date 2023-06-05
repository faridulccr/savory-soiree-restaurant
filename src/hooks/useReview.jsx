import { useEffect, useState } from "react";

const useReview = () => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_SAVORY_SERVER}/api/reviews`
                );
                const data = await res.json();
                // console.log(data);
                setReviews(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    return [loading, reviews];
};

export default useReview;
