import React, { useEffect, useState } from 'react'
import { Hourglass } from 'react-loader-spinner'
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function getData() {
            const call = await fetch(url);
            const res = await call.json();
            setLoading(false)
            setData(res);
        }
        getData();
    }, [])
    return [data];
}

export default useFetch;