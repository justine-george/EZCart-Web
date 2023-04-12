import { useState, useEffect } from 'react';

const useCachedData = (key, fetchFunction) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem(key);

            if (cachedData) {
                setData(JSON.parse(cachedData));
            } else {
                const response = await fetchFunction();
                console.log('API response:', response); // Log the API response

                if (Array.isArray(response)) {
                    setData(response);
                    localStorage.setItem(key, JSON.stringify(response));
                } else {
                    console.error('Unexpected data format:', response);
                }
            }
        };

        fetchData();
    }, [key, fetchFunction]);

    return [data];
};

export default useCachedData;
