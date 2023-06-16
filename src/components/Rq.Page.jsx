import React from 'react';
import { useQuery } from 'react-query';
import { fetchSuperHeroes } from '../hooks/useFetchSuperHeroes';



export default function ReactQueryPage() {

    const onSuccess = () => {
        alert("Data Fetching is Complete!");
    }
    const onError = () => {
        alert("Data Fetching encountered an Error!");
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        'super-heroes',
        fetchSuperHeroes,
        {
            // cacheTime: 5000,
            // staleTime: 30000,
            // refetchOnMount: true, // default true --options false|true|always
            // refetchOnWindowFocus: true, // default true --options false|true|always
            // refetchInterval: 20000, // default false --options false|number
            // refetchIntervalInBackground: true, // default false --options false|
            enabled: false, // default true used for fetching on click
            onError,
            onSuccess
        }
    );

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <h1>Loading Data ...</h1>
            </div>
        )
    }
    if (isError) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <h1>{error.message}</h1>
            </div>
        )
    }
    return (
        <div style={{ paddingLeft: '30px' }}>
            <h1 style={{ fontFamily: 'fantasy' }}>Super Heroes from RQ</h1>
            <button onClick={refetch}>FETCH DATA</button>
            {data?.data.map((hero) => (
                <div key={hero.id} style={{ fontStyle: 'italic', marginLeft: '20px' }}>{hero.name}</div>
            ))}
        </div>
    )
}
