import React, { useState, useEffect } from 'react'
import axios from 'axios';

const API_URL = "http://localhost:3000/superheroes";

export default function SuperHeroPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {

        axios.get(API_URL)
        .then(response => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
        });

    }, []);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <h1>Loading Data ...</h1>
            </div>
        )
    }
    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <h1>{error}</h1>
            </div>
        )
    }

    return (
        <div style={{paddingLeft:'30px'}}>
            <h1>Super Heros Page</h1>
            {data.map((hero) => (
                <div key={hero.id}>{hero.name}</div>
            ))}
        </div>
    )
}
