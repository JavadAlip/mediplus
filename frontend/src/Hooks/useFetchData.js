import { useEffect, useState } from 'react';
import { token } from '../config';
const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const result = await res.json();
                if (!res.ok) {
                    throw new Error(
                        ` ${result.message + '🙁'} `
                    );
                }
                const contentType = res.headers.get('content-type');

                if (result) {
                    setData(result.data);
                } else {
                    throw new Error('Response is not valid JSON');
                }
                setData(result.data);
                setLoading(false);
            } catch (error) {
                // console.error(error); // Log the error for debugging
                setLoading(false);
                setError(error.message);
            }
        };
        fetchData();
    }, [url]);
    return {
        data,
        loading,
        error,
    };
};
export default useFetchData;



