import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        // for dynamic page title
        document.title = `${title} - Savory Soiree`;
    }, [title]);
};

export default useTitle;
