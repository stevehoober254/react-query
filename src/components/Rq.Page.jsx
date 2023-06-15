import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';


const API_URL = "http://localhost:3000/superheroes";
const fetchSuperHeroes = () => axios.get(API_URL) 

export default function ReactQueryPage() {

    const { isLoading, data } = useQuery('super-heroes',fetchSuperHeroes );

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <h1>Loading Data ...</h1>
            </div>
        )
    }
    return (
        <div style={{ paddingLeft: '30px' }}>
            <h1 style={{ fontFamily: 'fantasy' }}>Super Heroes from RQ</h1>
            {data?.data.map((hero) => (
                <div key={hero.id} style={{ fontStyle: 'italic', marginLeft: '20px' }}>{hero.name}</div>
            ))}
        </div>
    )
}
